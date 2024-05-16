// "use client";
// import { useEffect, useState } from "react";
import { getApi2 } from "@/api-helper";
import { AdvancePost, Post, createPost } from "./AdvancePost";
// import { usePostsContext } from "../context/PostsWarpper";
export default async function ListPost({ category }: { category: string }) {
  // const { posts } = usePostsContext();

  const { data } = await getApi2(`api/blog/post?category=${category}`);
  const { posts } = data;
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
