"use client";
import { TextInput } from "flowbite-react";
import Brand from "./brand";
import { BRANCH_NAME } from "@/config/app.config";
export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center">
      <Brand branchName={BRANCH_NAME}></Brand>
      <div className="p-3">
        <TextInput type="text" placeholder="search" />
      </div>
    </div>
  );
}
