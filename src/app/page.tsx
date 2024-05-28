import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { HeadingTag, generateHeadingTag } from "@/config/metadata.helper";
import { HOST_FE, PAGE_LIMIT } from "@/config/app.config";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { PagingCalculate, getPosts } from "@/config/paging-helper";

export async function generateMetadata() {
  // const pageInfor = await getPageInfo();
  //http://localhost:1337/api/blog/category/huong-dan-co-ban
  let headingTag: HeadingTag = {
    title: "",
  };

  return generateHeadingTag(headingTag);
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const linkLM = `${HOST_FE}/`;
  const apiPath1 = `api/blog/posts?`;
  const { data, LinkLoadMore } = await getPosts(searchParams, apiPath1, linkLM);
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={data}>{LinkLoadMore}</ListPost>
    </MainLayout>
  );
}
