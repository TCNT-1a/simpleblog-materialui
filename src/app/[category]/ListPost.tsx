// "use client";
// import { useEffect, useState } from "react";
import { AdvancePost, Post, createPost } from "./AdvancePost";
// import { usePostsContext } from "../context/PostsWarpper";
export default async function ListPost({ category }: { category: string }) {
  // const { posts } = usePostsContext();
  const url = `http://localhost:1337/api/blog/post?category=${category}`;
  console.log("url1: ", url);
  const res = await fetch(url);
  const { data } = await res.json();
  const { post } = data;
  console.log("post: ", post);
  return (
    <>
      {post.map((post: any) => (
        <AdvancePost
          key={post.id}
          post={post}
          category={category}
        ></AdvancePost>
      ))}
    </>
  );
}
