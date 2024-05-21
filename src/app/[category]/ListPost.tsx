import { SnapPost } from "../../components/snappost/SnapPost";
import Custom404 from "../404";

export default function ListPost({ posts }: { posts: any[] }) {
  if (posts.length == 0) return <Custom404></Custom404>;
  return (
    <>
      {posts.map((post: any, i) => (
        <SnapPost key={i} post={post}></SnapPost>
      ))}
    </>
  );
}
