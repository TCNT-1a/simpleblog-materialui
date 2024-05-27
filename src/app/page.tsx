import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { HeadingTag, generateHeadingTag } from "@/config/metadata.helper";
import { HOST_FE, PAGE_LIMIT } from "@/config/app.config";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { PagingCalculate } from "@/config/paging-helper";

export async function generateMetadata() {
  // const pageInfor = await getPageInfo();
  //http://localhost:1337/api/blog/category/huong-dan-co-ban
  let headingTag: HeadingTag = {
    title: "",
  };

  return generateHeadingTag(headingTag);
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const { page, limit } = searchParams;

  const p_page = page ? page : 1;
  const p_limit = limit ? limit : PAGE_LIMIT;

  const apiPath = `api/blog/posts?` + `page=${p_page}&limit=${p_limit}`;
  const { data } = await getApi2(apiPath);

  const d = PagingCalculate(data, p_page, p_limit);
  if (data.length > p_limit) {
    data.pop();
  }

  const LinkLoadMore = `${HOST_FE}/`;
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
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
