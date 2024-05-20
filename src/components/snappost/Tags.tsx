import { Chip, Grid } from "@mui/material";
import { Post } from "./types";

export function Tags({ post }: { post: Post }) {
  const tags = post.tags;
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
      {tags.map((tag) => (
        <Grid item key={tag.id}>
          <Chip label={tag.tagName} />
        </Grid>
      ))}
    </Grid>
  );
}
