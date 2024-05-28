import { HOST } from "@/config/app.config";
import { Post } from "./types";
import Image from "next/image";
export function Thumbnail({ post }: { post: Post }) {
  let path: string;
  const w = 300;
  const h = 188;
  if (post.featureImage) {
    const { url } = post.featureImage;
    path = `${HOST}${url}`;
  } else path = getImage(post.id.toString(), w, h);
  return (
    <div
      className="overflow-hidden p-1 rounded-lg "
      style={{ width: w + "px", height: h + "px" }}
    >
      <Image
        className="rounded-lg"
        alt="post image"
        width={w}
        height={h}
        src={path}
      />
    </div>
  );
}
function getImage(id: string, w: number, h: number) {
  return `https://picsum.photos/${w}/${h}?random=${id}`;
}
