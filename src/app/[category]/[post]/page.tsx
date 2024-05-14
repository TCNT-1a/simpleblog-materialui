"use client";
import { usePostsContext } from "@/app/context/PostsWarpper";
import Image from "next/image";
export default function PostPageDetail({
  params,
}: {
  params: { post: string };
}) {
  const { posts } = usePostsContext();
  const post = posts.filter((post) => post.slug === params.post)[0];
  const url = post.urlImages ? post.urlImages[0] : "";
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.publicDate}</p>

      <p>
        <Image
          alt="post image"
          width={300}
          height={200}
          src={post.urlImages ? post.urlImages[0] : ""}
        ></Image>
      </p>

      <p>{post.content}</p>
    </div>
  );
}
