import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { generateMetadata_Object } from "@/config/metadata.helper";
import { HOST_FE } from "@/config/app.config";
import { LoadMore } from "@/components/ListPost/LoadMore";

export async function generateMetadata() {
  const pageInfor = await getPageInfo();
  return generateMetadata_Object(pageInfor.branchName, false);
}

export default async function Home() {
  const apiPath = `api/blog/posts`;
  const { data } = await getApi2(apiPath);

  const { next, previous, page, limit, posts } = data;
  if (data.length > limit) {
    posts.pop();
  }

  const LinkLoadMore = `${HOST_FE}/`;

  console.log(data);
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={data}>
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
