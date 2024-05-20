import PostDate from "./PostDate";
import { Tags } from "./Tags";
import { Post } from "./types";

export default function SnapPostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-row space-x-2 mt-2">
      <PostDate post={post} />
      <Tags post={post} />
    </div>
  );
}
