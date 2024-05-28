import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { HeadingTag, generateHeadingTag } from "@/config/metadata.helper";
import { HOST_FE, PAGE_LIMIT } from "@/config/app.config";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { PagingCalculate, getPosts } from "@/config/paging-helper";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  // const pageInfor = await getPageInfo();
  //http://localhost:1337/api/blog/category/huong-dan-co-ban
  let headingTag: HeadingTag = {
    title: "",
  };
  const linkLM = `${HOST_FE}/`;
  const apiPath = `api/blog/posts?`;
  const { nextPath, previousPath } = await getPosts(
    searchParams,
    apiPath,
    linkLM
  );
  return generateHeadingTag(headingTag, nextPath, previousPath);
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const linkLM = `${HOST_FE}/`;
  const apiPath = `api/blog/posts?`;
  const { data, LinkLoadMore } = await getPosts(searchParams, apiPath, linkLM);
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={data}>{LinkLoadMore}</ListPost>
    </MainLayout>
  );
}
