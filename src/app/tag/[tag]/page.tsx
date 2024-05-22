import { getApi2 } from "@/config/api-helper";
import MainLayout from "@/app/MainLayout";
import ListPost from "@/components/ListPost/ListPost";
import { LoadMore } from "@/components/ListPost/LoadMore";

type Props = {
  params: { tag: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function TagPage({ params, searchParams }: Props) {
  const { data } = await getApi2(`api/blog/post?tag=${params.tag}`);

  const { posts } = data;

  return (
    <MainLayout>
      <ListPost posts={posts}>
        <LoadMore />
      </ListPost>
    </MainLayout>
  );
}
