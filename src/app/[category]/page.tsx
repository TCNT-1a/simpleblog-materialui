import { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { BRANCH_NAME, HOST_FE } from "@/config/app.config";
import { NextPreviousHandle } from "@/config/paging-helper";

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
