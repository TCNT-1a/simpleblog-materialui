import { getApi2 } from "@/config/api-helper";
import MainLayout from "@/app/MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { PagingCalculate } from "@/config/paging-helper";
import { HOST_FE, PAGE_LIMIT } from "@/config/app.config";

type Props = {
  params: { tag: string };
  searchParams: any;
};

export default async function TagPage({ params, searchParams }: Props) {
  const { page, limit } = searchParams;

  const p_page = page ? page : 1;
  const p_limit = limit ? limit : PAGE_LIMIT;

  const apiPath =
    `api/blog/posts?tag=${params.tag}&` + `page=${p_page}&limit=${p_limit}`;
  const { data } = await getApi2(apiPath);
  const d = PagingCalculate(data, p_page, p_limit);

  if (data.length > p_limit) {
    data.pop();
  }
  const LinkLoadMore = `${HOST_FE}/tag/${params.tag}`;
  return (
    <MainLayout>
      <ListPost posts={data}>
        <LoadMore
          path={LinkLoadMore}
          page={p_page}
          limit={p_limit}
          next={d.next}
          previous={d.previous}
        ></LoadMore>
      </ListPost>
    </MainLayout>
  );
}
