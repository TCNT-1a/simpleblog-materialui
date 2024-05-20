import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { DateRange } from "@mui/icons-material";
import { Tags } from "./Tags";
import { Thumbnail } from "./Thumbnail";
import { Post } from "./types";
export function SnapPost({ post }: { post: Post }) {
  return (
    <div className="post-snap p-5-5">
      <div className="flex flex-col sm:flex-row">
        <div className="w-12/12 sm:w-4/12">{Thumbnail(post)}</div>
        <div className="flex flex-col bg-color2 w-12/12 sm:w-8/12">
          <TitlePost post={post} />

          <Description post={post} />
        </div>
      </div>
      <SnapPostFooter post={post} />
    </div>
  );
}

function TitlePost({ post }: { post: Post }) {
  return (
    <Link href={`/${post.category.slug}/${post.slug}`}>
      <h3>
        <span># </span>
        {post.title}
      </h3>
    </Link>
  );
}
export function PostDate({ post }: { post: Post }) {
  return post.publicDate ? (
    <div className="flex flex-row italic text-center justify-center">
      <DateRange />
      <small>
        <em>{post.publicDate}</em>
      </small>
    </div>
  ) : null;
}

function Description({ post }: { post: Post }) {
  return <summary className="aa">{post.metaDescription}</summary>;
}
function SnapPostFooter({ post }: { post: Post }) {
  return (
    <div className="flex flex-row">
      <ButtonDetail post={post} />
      <PostDate post={post} />
      <Tags post={post} />
    </div>
  );
}
function ButtonDetail({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      style={{ textDecoration: "none" }}
    >
      <Button variant="contained">Xem tiếp</Button>
    </Link>
  );
}
