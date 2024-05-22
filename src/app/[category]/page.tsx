import { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";

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
    title: category.name,
    description: category.metaDescription,
  };
}

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  const { data } = await getApi2(`api/blog/post?category=${params.category}`);
  const { posts } = data;

  return <ListPost posts={posts}></ListPost>;
}
