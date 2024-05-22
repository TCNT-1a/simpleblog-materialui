import { TextInput } from "flowbite-react";
import Brand from "./brand";
import { BRANCH_NAME } from "@/config/app.config";
import { getPageInfo } from "@/config/api-helper";
export default async function Header() {
  const pageInfo = await getPageInfo();

  return (
    <div className="bg-primary flex justify-between items-center">
      <Brand branchName={pageInfo.branchName || BRANCH_NAME}></Brand>
      <div className="p-3">
        <TextInput type="text" placeholder="search" />
      </div>
    </div>
  );
}
