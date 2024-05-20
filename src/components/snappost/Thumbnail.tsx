import { HOST } from "@/path.config";
import { Post } from "./types";
import Image from "next/image";
export function Thumbnail(post: Post) {
  let path: string;
  const w = 300;
  const h = 188;
  if (post.featureImage) {
    const { url } = post.featureImage;
    path = `${HOST}${url}`;
    console.log("path", path);
  } else path = getImage(post.id.toString(), w, h);
  return <Image alt="post image" width={w} height={h} src={path} />;
}
function getImage(id: string, w: number, h: number) {
  return `https://picsum.photos/${w}/${h}?random=${id}`;
}