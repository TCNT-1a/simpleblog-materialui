import { Button, Card, Chip, Grid, Typography, useTheme } from "@mui/material";

import Image from "next/image";
import { formatDateyyyyMMMdd, getLorem } from "../data/lorem";
import { layout_styles } from "./style";
import Link from "next/link";
import { ViewCount } from "@/components/ViewCount";
export function AdvancePost({
  post,
  category,
}: {
  post: Post;
  category: string;
}) {
  // const theme = useTheme();

  return (
    <Card key={post.id} style={layout_styles}>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item>
          <ViewCount viewCount={post.viewCount}></ViewCount>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Typography variant="body1" style={{ fontStyle: "italic" }}>
            {post.publicDate}
          </Typography>
        </Grid>
      </Grid>
      <Link
        href={`/${category}/${post.slug}`}
        passHref
        style={{ textDecoration: "none" }}
      >
        {/* <h3 style={{ color: theme.palette.info.light }}>
          <span style={{ color: theme.palette.primary.dark }}># </span>
          {post.title}
        </h3> */}
        <h3>
          <span># </span>
          {post.title}
        </h3>
      </Link>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>{showImage(post)}</Card>
        </Grid>
        <Grid item xs={8} style={{}}>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 8,
              overflow: "hidden",
            }}
          >
            {post.metaDescription}
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Link
            href={`/${category}/${post.slug}`}
            // passHref
            // style={{ textDecoration: "none" }}
          >
            <Button variant="contained">Xem tiếp</Button>
          </Link>
        </Grid>
        <Grid item>{/* <ViewCategory tags={post.tags} /> */}</Grid>
      </Grid>
    </Card>
  );
}

export function ViewCategory({ tags }: { tags: string }) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {tags.split(",").map((tag) => (
        <Grid item key={tag}>
          <Chip label={tag} />
        </Grid>
      ))}
    </Grid>
  );
}
export type Post = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  tags: string;
  publicDate: string;
  slug: string;
  featureImage?: any[];
  metaDescription: string;
};

export function createPost(id: number) {
  const title = getLorem(10).toUpperCase();
  const slug = title.toLowerCase().replace(/\s/g, "-");
  return {
    id: id,
    title,
    content: getLorem(100),
    viewCount: 100,
    tags: "category1, category2, category3",
    publicDate: formatDateyyyyMMMdd(new Date()),
    slug,
    urlImages: [getImage(id.toString())],
  };
}

function getImage(id: string) {
  return `https://picsum.photos/300/200?random=${id}`;
}

function showImage(post: Post) {
  let path: string;
  // console.log("post: ", post);
  if (post.featureImage) {
    const { url } = post.featureImage[0];
    console.log("url: ", url);
    path = `http://localhost:1337${url}`;
    console.log("path: ", path);
  } else path = getImage(post.id.toString());
  return (
    <img
      alt="post image"
      width={300}
      height={200}
      src={path}
      style={{ width: "100%" }}
    />
  );
}
