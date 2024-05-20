import { Chip, Grid } from "@mui/material";
import { Post } from "./types";

export function Tags({ post }: { post: Post }) {
  const tags = post.tags;
  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        <Chip label={tag.tagName} />
      ))}
    </div>
  );
}
