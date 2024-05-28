import { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";

import { HOST_FE } from "@/config/app.config";
import { getPosts } from "@/config/paging-helper";
import { generateHeadingTag } from "@/config/metadata.helper";
import { cache } from "react";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getHeadingTag = cache(async (category: string) => {
  const { data } = await getApi2(`api/blog/category/${category}`);
  return data;
});

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const linkLM = `${HOST_FE}/${params.category}`;
  const apiPath = `api/blog/posts?category=${params.category}`;
  const { nextPath, previousPath } = await getPosts(
    searchParams,
    apiPath,
    linkLM
  );

  const cat = await getHeadingTag(params.category);
  if (cat == null) return { title: "404 Not Found" };
  const { heading_tag } = cat;
  return generateHeadingTag(heading_tag, nextPath, previousPath);
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: any;
}) {
  const linkLM = `${HOST_FE}/${params.category}`;
  const apiPath = `api/blog/posts?category=${params.category}`;
  const { data, LinkLoadMore } = await getPosts(searchParams, apiPath, linkLM);

  return (
    <>
      <ListPost posts={data}>{LinkLoadMore}</ListPost>
    </>
  );
}
