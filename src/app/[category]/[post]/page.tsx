import { getApi2 } from "@/config/api-helper";
import { NumberOfView } from "@/components/NumberOfView";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { Metadata, ResolvingMetadata } from "next";
import Custom404, { HeadingTag404 } from "../../404/404";
import PostDate from "@/components/snappost/PostDate";
import { Avatar } from "flowbite-react";
import { HOST } from "@/config/app.config";
import { cache } from "react";
import { generateHeadingTag } from "@/config/metadata.helper";
type Props = {
  params: { post: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// const getHeadingTag = cache(async (category: string) => {
//   const { data } = await getApi2(`api/blog/category/${category}`);
//   return data;
// });
// const apiPath = "api/blog/category/";
const getPost = cache(async (slug: string) => {
  return await getApi2(`api/blog/post/${slug}`);
});
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await getPost(params.post);
  if (data == null) return HeadingTag404();
  const { heading_tag } = data;
  return generateHeadingTag(heading_tag, "", "");
}

export default async function PostPageDetail({ params, searchParams }: Props) {
  const { data } = await getApi2(`api/blog/post/${params.post}`);

  if (data == null) return <Custom404></Custom404>;
  else
    return (
      <>
        <h1>{data.title}</h1>
        <div className="flex flex-row items-center gap-2">
          <PostDate post={data}></PostDate>
          <NumberOfView viewNumber={data.postViews}></NumberOfView>
          <AvatarUser author={data.author}></AvatarUser>
        </div>
        {data.content ? <BlocksRenderer content={data.content} /> : null}
      </>
    );
}

function AvatarUser({ author }: { author: any }) {
  let url;
  const urldefault =
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg";
  if (!author) url = urldefault;
  else url = author.avatar ? author.avatar.url : urldefault;
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
