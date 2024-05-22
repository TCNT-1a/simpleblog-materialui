import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { LoadMore } from "@/components/ListPost/LoadMore";
import { generateMetadata_Object } from "@/config/metadata.helper";

export async function generateMetadata() {
  const pageInfor = await getPageInfo();
  return generateMetadata_Object(
    pageInfor.branchName,
    pageInfor.metaHomePage,
    false
  );
}

export default async function Home() {
  const { data } = await getApi2(`api/blog/post`);
  const { posts } = data;
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={posts}>
        <LoadMore></LoadMore>
      </ListPost>
    </MainLayout>
  );
}
