import { getApi2 } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { Metadata, ResolvingMetadata } from "next";
import { BRANCH_NAME } from "@/config/app.config";

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

export default async function Home() {
  const { data } = await getApi2(`api/blog/post`);
  const { posts } = data;
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={posts}>
        <LoadMore></LoadMore>
      </ListPost>
    </MainLayout>
  );
}
