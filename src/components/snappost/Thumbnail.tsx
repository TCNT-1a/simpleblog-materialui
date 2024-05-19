import { Post } from "./post";
import Image from "next/image";
export function Thumbnail(post: Post) {
  let path: string;
  const w = 300;
  const h = 188;
  if (post.featureImage) {
    const { url } = post.featureImage[0];
    console.log("url: ", url);
    path = `http://localhost:1337${url}`;
    console.log("path: ", path);
  } else path = getImage(post.id.toString(), w, h);
  return (
    <Image
      alt="post image"
      width={w}
      height={h}
      src={path}
      // style={{ width: "100%" }}
    />
  );
}
function getImage(id: string, w: number, h: number) {
  return `https://picsum.photos/${w}/${h}?random=${id}`;
}
