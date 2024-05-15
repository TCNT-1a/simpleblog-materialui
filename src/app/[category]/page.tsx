// "use client";

import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  const url1 = `http://localhost:1337/api/blog/post?category=${params.category}`;
  console.log("url1: ", url1);
  const res = await fetch(url1);
  const posts = await res.json();
  console.log("post: ", posts);

  return (
    <div className="w">
      <ListPost category={params.category}></ListPost>
    </div>
  );
}
