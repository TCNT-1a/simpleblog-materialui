"use client";
export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <p>This is the post page</p>
    </div>
  );
}
