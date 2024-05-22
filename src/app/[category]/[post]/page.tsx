import { getApi2 } from "@/config/api-helper";
import { NumberOfView } from "@/components/NumberOfView";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { Metadata, ResolvingMetadata } from "next";
import Custom404 from "../../404/404";
import PostDate from "@/components/snappost/PostDate";
import { Avatar } from "flowbite-react";
import { HOST } from "@/config/app.config";
type Props = {
  params: { post: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await getApi2(`api/blog/post/${params.post}`);
  const { post } = data;
  if (post == null) return { title: "404 Not Found" };
  return {
    title: post.title,
    description: post.metaDescription,
  };
}

export default async function PostPageDetail({ params, searchParams }: Props) {
  const { data } = await getApi2(`api/blog/post/${params.post}`);
  const { post } = data;

  if (post == null) return <Custom404></Custom404>;
  else
    return (
      <>
        <h1>{post.title}</h1>
        <div className="flex flex-row items-center gap-2">
          <PostDate post={post}></PostDate>
          <NumberOfView viewNumber={post.viewCount}></NumberOfView>
          <AvatarUser author={post.author}></AvatarUser>
        </div>
        {post.content ? <BlocksRenderer content={post.content} /> : null}
      </>
    );
}

function AvatarUser({ author }: { author: any }) {
  let url;
  const urldefault =
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg";
  if (!author) url = urldefault;
  else url = author.avatar.url ? author.avatar.url : urldefault;
  const path = HOST + url;
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {author ? (
        <>
          <Avatar img={path} alt={author.name} rounded bordered />
          <em>{author.name}</em>
        </>
      ) : null}
    </div>
  );
}
