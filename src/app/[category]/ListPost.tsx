"use client";
import { useEffect, useState } from "react";
import { AdvancePost, Post, createPost } from "./AdvancePost";
import { usePostsContext } from "../context/PostsWarpper";
export default function ListPost({ category }: { category: string }) {
  const { posts } = usePostsContext();
  return (
    <>
      {posts.map((post) => (
        <AdvancePost
          key={post.id}
          post={post}
          category={category}
        ></AdvancePost>
      ))}
    </>
  );
}
