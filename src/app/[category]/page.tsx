import { Metadata, ResolvingMetadata } from "next";
import ListPost from "../../components/ListPost/ListPost";
import { getApi2 } from "@/config/api-helper";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { BRANCH_NAME, HOST_FE, PAGE_LIMIT } from "@/config/app.config";
import { PagingCalculate } from "@/config/paging-helper";
import { generateHeadingTag } from "@/config/metadata.helper";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await getApi2(`api/blog/category/${params.category}`);
  if (data == null) return { title: "404 Not Found" };
  const { heading_tag } = data;
  return generateHeadingTag(heading_tag);
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: any;
}) {
  const { page, limit } = searchParams;

  const p_page = page ? page : 1;
  const p_limit = limit ? limit : PAGE_LIMIT;

  const apiPath =
    `api/blog/posts?category=${params.category}&` +
    `page=${p_page}&limit=${p_limit}`;
  const { data } = await getApi2(apiPath);

  const d = PagingCalculate(data, p_page, p_limit);

  if (data.length > p_limit) {
    data.pop();
  }

  const LinkLoadMore = `${HOST_FE}/${params.category}`;
  return (
    <ListPost posts={data}>
      <LoadMore
        path={LinkLoadMore}
        page={p_page}
        limit={p_limit}
        next={d.next}
        previous={d.previous}
      ></LoadMore>
    </ListPost>
  );
}
