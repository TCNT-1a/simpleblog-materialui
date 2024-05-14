"use client";

import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default function PostPage({ params }: { params: { category: string } }) {
  return (
    <div className="w">
      {/* <h2 style={layout_styles}>{params.slug}</h2> */}
      <ListPost category={params.category}></ListPost>
    </div>
  );
}
