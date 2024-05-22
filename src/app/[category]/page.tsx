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
  const { page, limit } = searchParams;
  const numLimit = parseInt(limit as string) || 3;
  const { data } = await getApi2(
    `api/blog/post?category=${params.category}&page=${page}&limit=${
      numLimit + 1
    }`
  );
  const { posts } = data;
  let next = false;
  let previous = false;
  if (posts.length > numLimit) {
    next = true;
  }
  if (page > 1) {
    previous = true;
  }
  posts.pop();
  const path = `${HOST_FE}${params.category}`;
  console.log(path);
  return (
    <ListPost posts={posts}>
      <LoadMore
        path={path}
        page={page}
        limit={numLimit}
        next={next}
        previous={previous}
      ></LoadMore>
    </ListPost>
  );
}
