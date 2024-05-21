import { getApi2 } from "@/api-helper";

import Link from "next/link";
import { Badge } from "flowbite-react";
import { classesBlockChild } from "@/styles/styles";

export default function LeftBar() {
  return (
    <>
      <div>
        <Tags />
      </div>
      <div className="mt-4">
        <Categories />
      </div>
    </>
  );
}

async function Tags() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/tags");
    const tags = data.tags;
    return (
      <div>
        <h5 className="mb-5">Tags</h5>
        <div className={"flex flex-row flex-wrap " + classesBlockChild}>
          {tags.map((tag: any) => (
            <Badge
              color="red"
              key={tag.slug}
              className="w-fit mt-1 mr-2 min-w-fit"
            >
              <Link href={`/tag/${tag.slug}`} className="hover:bg-bg-hover">
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
      <div className={"flex flex-col " + classesBlockChild}>
        <h5 className="mb-5">Categories</h5>
        {categories.map((category: any) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="rounded-lg bg-bg hover:bg-bg-hover p-4 mb-2 flex flex-row"
          >
            <div className="rounded-full w-6 h-6 bg-primary mr-2"></div>
            <div>{category.name}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export function isClientSide() {
  return typeof window !== "undefined";
}
