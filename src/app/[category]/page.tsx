import { Metadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { layout_styles } from "./style";
import { getApi2 } from "@/api-helper";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  const { data } = await getApi2(`api/blog/post?category=${params.category}`);
  const { posts } = data;

  return <ListPost posts={posts}></ListPost>;
}
