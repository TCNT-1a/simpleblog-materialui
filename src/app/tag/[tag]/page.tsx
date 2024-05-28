import { getApi2 } from "@/config/api-helper";
import MainLayout from "@/app/MainLayout";
import ListPost from "@/components/ListPost/ListPost";

import { getPosts } from "@/config/paging-helper";
import { HOST_FE } from "@/config/app.config";
import { generateHeadingTag } from "@/config/metadata.helper";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { tag: string };
  searchParams: any;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const linkLM = `${HOST_FE}/tag/${params.tag}`;
  const apiPath = `api/blog/posts?tag=${params.tag}`;
  const { nextPath, previousPath } = await getPosts(
    searchParams,
    apiPath,
    linkLM
  );

  const { data } = await getApi2(`api/blog/tag/${params.tag}`);
  if (data == null) return { title: "404 Not Found" };
  const { heading_tag } = data;
  return generateHeadingTag(heading_tag, nextPath, previousPath);
}

export default async function TagPage({ params, searchParams }: Props) {
  const linkLM = `${HOST_FE}/tag/${params.tag}`;
  const apiPath = `api/blog/posts?tag=${params.tag}`;
  const { data, LinkLoadMore } = await getPosts(searchParams, apiPath, linkLM);

  return (
    <MainLayout>
      <ListPost posts={data}>{LinkLoadMore}</ListPost>
    </MainLayout>
  );
}
