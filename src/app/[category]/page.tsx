// "use client";

import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="w">
      <h1>Post</h1>
      <ListPost category={params.category}></ListPost>
    </div>
  );
}
