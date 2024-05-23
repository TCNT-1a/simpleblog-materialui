import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { generateMetadata_Object } from "@/config/metadata.helper";
import { NextPreviousHandle } from "@/config/paging-helper";
import { HOST_FE } from "@/config/app.config";

export async function generateMetadata() {
  const pageInfor = await getPageInfo();
  return generateMetadata_Object(
    pageInfor.branchName,
    pageInfor.metaHomePage,
    false
  );
}

export default async function Home() {
  const apiPath = `api/blog/post`;

  const data = await NextPreviousHandle(apiPath, null);
  const { next, previous, page, limit, posts } = data;
  if (posts.length > limit) {
    posts.pop();
  }

  const LinkLoadMore = `${HOST_FE}`;

  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={posts}>
        <LoadMore
          path={LinkLoadMore}
          page={page}
          limit={limit}
          next={next}
          previous={previous}
        ></LoadMore>
      </ListPost>
    </MainLayout>
  );
}
