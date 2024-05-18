import { getApi2 } from "@/api-helper";
import MainLayout from "@/app/MainLayout";
import ListPost from "@/app/[category]/ListPost";

type Props = {
  params: { tag: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function TagPage({ params, searchParams }: Props) {
  console.log("aa", params.tag);
  const { data } = await getApi2(`api/blog/post?tag/${params.tag}`);
  console.log(data);
  const { posts } = data;

  return (
    <MainLayout>
      <ListPost posts={posts}></ListPost>
    </MainLayout>
  );
}
