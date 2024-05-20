import { Post } from "./types";
import { Badge } from "flowbite-react";
export function Tags({ post }: { post: Post }) {
  const tags = post.tags;

  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        <Badge color="red" key={tag.slug} className="mr-2 w-fit h-fit">
          {tag.tagName}
        </Badge>
      ))}
    </div>
  );
}
