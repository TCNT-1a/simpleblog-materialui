import { Post } from "./post";

export function Thumbnail(post: Post) {
  let path: string;
  if (post.featureImage) {
    const { url } = post.featureImage[0];
    console.log("url: ", url);
    path = `http://localhost:1337${url}`;
    console.log("path: ", path);
  } else path = getImage(post.id.toString());
  return (
    <img
      alt="post image"
      width={300}
      height={200}
      src={path}
      style={{ width: "100%" }}
    />
  );
}
function getImage(id: string) {
  return `https://picsum.photos/300/200?random=${id}`;
}
