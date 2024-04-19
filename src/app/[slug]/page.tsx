"use client";

import ListPost from "../series/ListPost";
import { layout_styles } from "../series/style";

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="w">
      <h2 style={layout_styles}>{params.slug}</h2>
      <ListPost></ListPost>
    </div>
  );
}
