import { SnapPost } from "../snappost/SnapPost";
import Custom404 from "../../app/404/404";
import React from "react";

export default function ListPost({
  posts,
  children,
}: {
  posts: any[];
  children?: React.ReactNode;
}) {
  console.log("posts", posts);
  if (posts.length == 0) return <Custom404></Custom404>;
  return (
    <div className="flex flex-col flex-wrap space-y-3 mb-5">
      {posts.map((post: any, i: number) => (
        <SnapPost key={i} post={post}></SnapPost>
      ))}
      <div>{children ? children : ""}</div>
    </div>
  );
}
