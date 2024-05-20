import { getApi2 } from "@/api-helper";
import { NumberOfView } from "@/components/NumberOfView";
import { Box, Grid, Typography } from "@mui/material";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Avatar from "@mui/material/Avatar";
import type { Metadata, ResolvingMetadata } from "next";
import Custom404 from "../../404";
import { PostDate } from "@/components/snappost/SnapPost";

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
        <Typography variant="h1"> {post.title}</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <PostDate post={post}></PostDate>
          </Grid>
          <Grid item>
            <NumberOfView viewNumber={post.viewCount}></NumberOfView>
          </Grid>
          <Grid item>
            <AvatarUser author={post.author}></AvatarUser>
          </Grid>
        </Grid>
        {post.content ? <BlocksRenderer content={post.content} /> : null}
      </>
    );
}

function AvatarUser({ author }: { author: any }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", verticalAlign: "center" }}
    >
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box>{author.name}</Box>
    </Box>
  );
}
