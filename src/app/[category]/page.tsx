import { Metadata } from "next";
import ListPost from "./ListPost";
import { layout_styles } from "./style";
import { getApi2 } from "@/api-helper";
import { classesBlock, classesBlockChild } from "@/styles/styles";
import BTCPrice from "@/components/coinprice/BTCPrice";
import ETHPrice from "@/components/coinprice/ETHPrice";

export default async function PostPage({
  params,
}: {
  params: { category: string };
}) {
  const { data } = await getApi2(`api/blog/post?category=${params.category}`);
  const { posts } = data;

  return (
    <div className="flex flex-row space-x-2">
      <div className="w-[600px]">
        <ListPost posts={posts}></ListPost>
      </div>
      <div className="w-[600px]">
        <div className={"flex flex-col " + classesBlock}>
          <h5 className="mb-5">Thị trường</h5>
          <BTCPrice></BTCPrice>
          <ETHPrice></ETHPrice>
        </div>
      </div>
    </div>
  );
}
