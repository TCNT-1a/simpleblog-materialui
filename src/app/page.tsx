import { getApi2, getPageInfo } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { generateMetadata_Object } from "@/config/metadata.helper";

export async function generateMetadata() {
  const pageInfor = await getPageInfo();
  return generateMetadata_Object(pageInfor.branchName, false);
}

export default async function Home() {
  const apiPath = `api/blog/posts`;
  const { data } = await getApi2(apiPath);

  console.log(data);
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={data}></ListPost>
    </MainLayout>
  );
}
