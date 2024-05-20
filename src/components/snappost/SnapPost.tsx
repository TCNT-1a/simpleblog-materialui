import Link from "next/link";

import { Tags } from "./Tags";
import { Thumbnail } from "./Thumbnail";
import { Post } from "./types";
import { Button } from "flowbite-react";
import PostDate from "./PostDate";
import SnapPostMeta from "./SnapPostMeta";
export function SnapPost({ post }: { post: Post }) {
  return (
    <div className="post-snap mb-5">
      <div className="flex flex-col sm:flex-row ">
        <div className="w-12/12 sm:w-4/12">
          <Thumbnail post={post} />
        </div>
        <div className="flex flex-col bg-color2 w-12/12 sm:w-8/12">
          <TitlePost post={post} />
          <Description post={post} />
        </div>
      </div>
      <SnapPostMeta post={post} />
    </div>
  );
}

function TitlePost({ post }: { post: Post }) {
  return (
    <Link className="pt-5" href={`/${post.category.slug}/${post.slug}`}>
      <h3>
        <span># </span>
        {post.title}
      </h3>
    </Link>
  );
}

function Description({ post }: { post: Post }) {
  return <summary className="p-5">{post.metaDescription}</summary>;
}
// function SnapPostFooter({ post }: { post: Post }) {
//   return (
//     <div className="flex flex-row space-x-2 mt-2">
//       <PostDate post={post} />
//       <Tags post={post} />
//     </div>
//   );
// }
