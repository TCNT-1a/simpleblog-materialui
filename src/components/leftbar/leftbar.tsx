import { getApi2 } from "@/api-helper";
import { Chip, Grid, Box, Typography, makeStyles, styled } from "@mui/material";
import { StyleLink } from "../StyleLink";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Link from "next/link";

export default function LeftBar() {
  return (
    <div className="leftbar bg-green-100 p-4">
      <Tags />
      <Categories />
    </div>
  );
}

async function Tags() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/tags");
    const tags = data.tags;
    return (
      <div>
        <h5>Tags</h5>
        {tags.map((tag: any) => (
          <Link key={tag.slug} href={`/tag/${tag.slug}`} passHref>
            <Chip label={`${tag.name} (${tag.count})`} />
          </Link>
        ))}
      </div>
    );
  }
}

async function Categories() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/category");
    const categories = data.categories;
    return (
      <div className="flex flex-col">
        <h5>Categories</h5>
        {categories.map((category: any) => (
          <Link key={category.slug} href={`/${category.slug}`}>
            <TouchAppIcon />
            {category.name}
          </Link>
        ))}
      </div>
    );
  }
}

export function isClientSide() {
  return typeof window !== "undefined";
}
