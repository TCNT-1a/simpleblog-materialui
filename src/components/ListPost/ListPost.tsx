import { SnapPost } from "../snappost/SnapPost";
import Custom404 from "../../app/404/404";

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
