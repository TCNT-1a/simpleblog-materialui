import next, { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { BRANCH_NAME, HOST_FE, PAGE_LIMIT } from "@/config/app.config";
import LeftBar from "../../components/leftbar/leftbar";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await getApi2(`api/blog/post?category=${params.category}`);
  const { category } = data;
  if (category == null) return { title: "404 Not Found" };
  return {
    title: BRANCH_NAME + " - " + category.name,
    description: BRANCH_NAME + " - " + category.metaDescription,
  };
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: any;
}) {
  const apiPath = `api/blog/post?category=${params.category}`;

  const data = await NextPreviousHandle(apiPath, searchParams);
  const { next, previous, page, limit, posts } = data;
  if (posts.length > limit) {
    posts.pop();
  }

  const LinkLoadMore = `${HOST_FE}/${params.category}`;
  return (
    <ListPost posts={posts}>
      <LoadMore
        path={LinkLoadMore}
        page={page}
        limit={limit}
        next={next}
        previous={previous}
      ></LoadMore>
    </ListPost>
  );
}

export async function NextPreviousHandle(apiPath: string, searchParams: any) {
  const { page, limit } = searchParams;

  let cal_page = parseInt(page == undefined ? 1 : page);
  let cal_limit = parseInt(limit == undefined ? PAGE_LIMIT : limit);

  const query = page ? `&page=${page}&limit=${cal_limit + 1}` : "";
  const fullPathQuery = `${apiPath}${query}`;
  console.log("fullPathQuery ", fullPathQuery);
  const { data } = await getApi2(fullPathQuery);
  const { posts } = data;
  console.log("post ", posts.length);

  const d = PagingCalculate(posts, cal_page, cal_limit);
  let next = false;
  let previous = false;
  next = d.next;
  previous = d.previous;
  return { next, previous, page: cal_page, limit: cal_limit, posts };
}

function PagingCalculate(post_Add1: any[], page: number, limit: number) {
  let next = false;
  let previous = false;

  if (post_Add1.length > limit) {
    next = true;
  }
  if (page <= 1) {
    previous = false;
  } else {
    previous = true;
  }

  return {
    next,
    previous,
  };
}
