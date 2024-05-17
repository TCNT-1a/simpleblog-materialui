import { getApi2 } from "@/api-helper";
import { NumberOfView } from "@/components/NumberOfView";
import { Box, Grid } from "@mui/material";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { Metadata, ResolvingMetadata } from "next";

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

  return {
    title: post.title,
    description: post.metaDescription,
  };
}

export default async function PostPageDetail({ params, searchParams }: Props) {
  const { data } = await getApi2(`api/blog/post/${params.post}`);
  const { post } = data;

  return (
    <>
      <h1>{post.title}</h1>
      <Grid container spacing={2}>
        <Grid item>{post.publicDate}</Grid>
        <Grid item>
          <NumberOfView viewNumber={post.viewCount}></NumberOfView>
        </Grid>
        <Grid item>{post.author.name}</Grid>
      </Grid>
      <BlocksRenderer content={post.content} />;
    </>
  );
}
