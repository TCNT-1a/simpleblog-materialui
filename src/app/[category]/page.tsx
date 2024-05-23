import { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { BRANCH_NAME, HOST_FE } from "@/config/app.config";

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
  let callimit = parseInt(limit == undefined ? 3 : limit);
  if (Number.isInteger(page)) {
  }
  if (Number.isInteger(limit)) {
    console.log("limit: ", limit);
    callimit = parseInt(limit);
  }

  const q = page ? `&page=${page}&limit=${callimit + 1}` : "";
  const t = `${apiPath}${q}`;
  // console.log("t: ", t);
  const { data } = await getApi2(t);
  const { posts } = data;

  // console.log("post: ", posts);
  let next = false;
  let previous = false;
  if (page == null) {
    next = false;
    previous = false;
  } else {
    if (posts.length > callimit) {
      next = true;
    }
    if (page > 1) {
      previous = true;
    }
  }
  return { next, previous, page, limit: callimit, posts };
}
