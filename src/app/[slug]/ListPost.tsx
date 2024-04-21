"use client";
import { useEffect, useState } from "react";
import { AdvancePost, Post, createPost } from "./AdvancePost";
export default function ListPost({ slug }: { slug: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) =>
      createPost(id)
    ) as Post[];
    setPosts(p);
  }, []);
  return (
    <>
      {posts.map((post) => (
        <AdvancePost key={post.id} post={post} slug={slug}></AdvancePost>
      ))}
    </>
  );
}
