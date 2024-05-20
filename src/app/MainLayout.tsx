import React from "react";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar/leftbar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex flex-col sm:flex-row">
        <div className="w-12/12 sm:w-3/12">
          <LeftBar />
        </div>

        <div className="w-12/12 sm:w-9/12">{children}</div>
      </div>
    </div>
  );
}
