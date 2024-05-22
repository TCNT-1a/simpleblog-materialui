import { getApi2 } from "@/config/api-helper";
import MainLayout from "./MainLayout";
import ListPost from "@/components/ListPost/ListPost";

export default async function Home() {
  const { data } = await getApi2(`api/blog/post`);
  const { posts } = data;
  return (
    <MainLayout>
      <h2>Bài viết mới nhất</h2>
      <ListPost posts={posts}></ListPost>
    </MainLayout>
  );
}
