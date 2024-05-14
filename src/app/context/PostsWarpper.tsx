"use client";
import React, { useEffect, useState } from "react";
import { Post, createPost } from "../[category]/AdvancePost";

const PostsContext = React.createContext({
  posts: [] as Post[],
});

export function usePostsContext() {
  return React.useContext(PostsContext);
}
export function PostsWrapper({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) =>
      createPost(id)
    ) as Post[];
    setPosts(p);
  }, []);
  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
