import { getApi2 } from "@/api-helper";
import { Grid, Box, Typography, makeStyles, styled } from "@mui/material";
import { StyleLink } from "../StyleLink";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Link from "next/link";
import { Badge } from "flowbite-react";

export default function LeftBar() {
  return (
    <div className="leftbar p-4">
      <div>
        <Tags />
      </div>
      <div className="mt-4">
        <Categories />
      </div>
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
        <div className="flex flex-row">
          {tags.map((tag: any) => (
            <Badge color="red" key={tag.slug} className="w-fit mt-1 mr-2">
              <Link href={`/tag/${tag.slug}`}>
                {`${tag.name} (${tag.count})`}
              </Link>
            </Badge>
          ))}
        </div>
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
