import { DateRange } from "@mui/icons-material";
import { Post } from "./types";

export default function PostDate({ post }: { post: Post }) {
  return post.publicDate ? (
    <div className="flex flex-row italic text-center justify-center">
      <DateRange />
      {post.publicDate}
    </div>
  ) : null;
}
