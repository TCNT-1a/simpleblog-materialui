import React from "react";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar/leftbar";
import { classesBlock } from "@/styles/styles";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex flex-col sm:flex-row">
        <div className="w-12/12 sm:w-3/12 pt-4 pr-4">
          <div className={"leftbar p-3 " + classesBlock}>
            <LeftBar />
          </div>
        </div>
        <div className="w-12/12 sm:w-9/12 pt-4">
          <div className={"min-h-100vh "}>{children}</div>
        </div>
      </div>
    </div>
  );
}
