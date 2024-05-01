"use client";

export default function PostPageDetail({
  params,
}: {
  params: { article: string };
}) {
  console.log(params);
  return (
    <div>
      <h1>Tên bài viết {params.article}</h1>
      <p>This is the post page detail</p>
    </div>
  );
}
