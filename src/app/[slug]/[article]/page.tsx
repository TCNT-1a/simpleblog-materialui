"use client";
import { usePostsContext } from "@/app/context/PostsWarpper";
export default function PostPageDetail({
  params,
}: {
  params: { article: string };
}) {
  const { posts } = usePostsContext();
  const post = posts.filter((post) => post.slug === params.article)[0];
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
