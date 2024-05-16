import { getApi2 } from "@/api-helper";
import { usePostsContext } from "@/app/context/PostsWarpper";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Markdown from "react-markdown";
export default async function PostPageDetail({
  params,
}: {
  params: { post: string };
}) {
  // const { posts } = usePostsContext();
  // const post = posts.filter((post) => post.slug === params.post)[0];
  // const url = post.urlImages ? post.urlImages[0] : "";
  const { data } = await getApi2(`api/blog/post/${params.post}`);
  const { post } = data;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.publicDate}</p>
      {/* <p>
        <Image
          alt="post image"
          width={300}
          height={200}
          src={post.urlImages ? post.urlImages[0] : ""}
        ></Image>
      </p> */}
      <BlocksRenderer content={post.content} />;
      {/* <Markdown>{post.content}</Markdown> */}
    </div>
  );
}
