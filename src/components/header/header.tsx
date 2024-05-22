"use client";
import { TextInput } from "flowbite-react";
import Brand from "./brand";
export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center">
      <Brand branchName="airwork chain"></Brand>
      <div className="p-3">
        <TextInput type="text" placeholder="search" />
      </div>
    </div>
  );
}
