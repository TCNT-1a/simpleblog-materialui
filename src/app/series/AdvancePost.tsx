import { Button, Card, Chip, Grid, Typography, useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import { formatDateyyyyMMMdd, getLorem } from "../data/lorem";
export function AdvancePost({ post }: { post: Post }) {
  const theme = useTheme();
  return (
    <Card
      key={post.id}
      style={{
        padding: 20,
        margin: 10,
      }}
    >
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
      <h2 style={{ color: theme.palette.info.light }}>#{post.title}</h2>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Image
            alt="post image"
            width={300}
            height={200}
            src={`https://picsum.photos/300/200?random=${post.id}`}
            style={{ width: "100%" }}
          ></Image>
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
            {post.content}
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained">Xem tiếp</Button>
        </Grid>
        <Grid item>
          <ViewCategory tags={post.tags} />
        </Grid>
      </Grid>
    </Card>
  );
}

function ViewCount({ viewCount }: { viewCount: number }) {
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid item>
        <VisibilityIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1">{viewCount}</Typography>
      </Grid>
    </Grid>
  );
}
function ViewCategory({ tags }: { tags: string }) {
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
};

export function createPost(id: number) {
  return {
    id: id,
    title: getLorem(10),
    content: getLorem(100),
    viewCount: 100,
    tags: "category1, category2, category3",
    publicDate: formatDateyyyyMMMdd(new Date()),
  };
}
