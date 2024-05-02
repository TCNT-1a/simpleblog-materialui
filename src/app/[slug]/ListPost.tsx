"use client";
import { useEffect, useState } from "react";
import { AdvancePost, Post, createPost } from "./AdvancePost";
import { usePostsContext } from "../context/PostsWarpper";
export default function ListPost({ slug }: { slug: string }) {
  const { posts } = usePostsContext();
  return (
    <>
      {posts.map((post) => (
        <AdvancePost key={post.id} post={post} slug={slug}></AdvancePost>
      ))}
    </>
  );
}
