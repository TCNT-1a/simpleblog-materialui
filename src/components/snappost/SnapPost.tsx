import Link from "next/link";

import { Tags } from "./Tags";
import { Thumbnail } from "./Thumbnail";
import { Post } from "./types";
import { Button } from "flowbite-react";
import PostDate from "./PostDate";
import SnapPostMeta from "./SnapPostMeta";
import { classesBlock, classesBlockChild } from "@/styles/styles";
export function SnapPost({ post }: { post: Post }) {
  return (
    <div className="mb-8">
      <div className={"post-snap w-12/12 bg-bg-primary " + classesBlock}>
        <div className="flex flex-col sm:flex-row bg-bg-secondary p-1">
          <div className="w-12/12 sm:w-50">
            <Thumbnail post={post} />
          </div>
          <div className="flex flex-col  w-12/12 sm:w-8/12">
            <TitlePost post={post} />
            <Description post={post} />
          </div>
        </div>
        <SnapPostMeta post={post} />
      </div>
    </div>
  );
}

function TitlePost({ post }: { post: Post }) {
  return (
    <Link className="pt-5 pl-5" href={`/${post.category.slug}/${post.slug}`}>
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
