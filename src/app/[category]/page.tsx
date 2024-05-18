// "use client";

import { Metadata } from "next";
import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="w">
      <ListPost category={params.category}></ListPost>
    </div>
  );
}
