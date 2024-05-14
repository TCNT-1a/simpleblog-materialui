// "use client";

import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  // console.log("category ", params.category);
  const url = "http://localhost:1337/api/post-category?tag=layer1&category=1";
  const res = await fetch(url);
  const posts = await res.json();
  console.log("post: ", posts);

  return (
    <div className="w">
      {/* <h2 style={layout_styles}>{params.slug}</h2> */}

      <ListPost category={params.category}></ListPost>
    </div>
  );
}
