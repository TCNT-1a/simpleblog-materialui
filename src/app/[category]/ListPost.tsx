import { getApi2 } from "@/api-helper";
import { AdvancePost } from "./AdvancePost";
import Custom404 from "../404";

export default async function ListPost({ category }: { category: string }) {
  const { data } = await getApi2(`api/blog/post?category=${category}`);
  const { posts } = data;
  if (posts.length == 0) return <Custom404></Custom404>;
  return (
    <>
      {posts.map((post: any) => (
        <AdvancePost
          key={post.id}
          post={post}
          category={category}
        ></AdvancePost>
      ))}
    </>
  );
}
