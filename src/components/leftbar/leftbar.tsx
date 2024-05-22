import { getApi2 } from "@/config/api-helper";

import Link from "next/link";
import { Badge } from "flowbite-react";
import { GrayBox, WhiteBox } from "../Container/Box";

export default function LeftBar() {
  return (
    <WhiteBox>
      <div>
        <Tags />
      </div>
      <div>
        <Categories />
      </div>
    </WhiteBox>
  );
}

async function Tags() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/tags");
    const tags = data.tags;
    return (
      <GrayBox title="Tags">
        <div className={"flex flex-row flex-wrap "}>
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
      </GrayBox>
    );
  }
}

async function Categories() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/category");
    const categories = data.categories;
    return (
      <GrayBox title="Categories">
        {categories.map((category: any) => (
          <WhiteBox hoverable={true}>
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="p-1 flex flex-row"
            >
              <div className="rounded-full w-6 h-6 bg-primary mr-2"></div>
              <div>{category.name}</div>
            </Link>
          </WhiteBox>
        ))}
      </GrayBox>
    );
  }
}

export function isClientSide() {
  return typeof window !== "undefined";
}
