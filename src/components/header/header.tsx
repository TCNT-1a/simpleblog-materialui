import Brand from "./brand";
import { BRANCH_NAME } from "@/config/app.config";
import { getPageInfo } from "@/config/api-helper";
import { SearchBox } from "./Search";
export default async function Header() {
  const pageInfo = await getPageInfo();

  return (
    <div className="bg-primary flex justify-between items-center shadow-md">
      <Brand branchName={pageInfo.branchName || BRANCH_NAME}></Brand>
      <div className="p-3">
        <SearchBox></SearchBox>
      </div>
    </div>
  );
}
