import React from "react";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar/leftbar";
import { classesBlock, classesBlockChild } from "@/styles/styles";
import Footer from "@/components/footer/footer";
import BTCPrice from "@/components/coinprice/BTC/BTCPrice";
import ETHPrice from "@/components/coinprice/ETH/ETHPrice";
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
        <div className="w-12/12 sm:w-9/12 pt-4 flex flex-col sm:flex-row ">
          <div className={"flex flex-col w-12/12 sm:w-10/12"}>{children}</div>
          <div
            className={
              "flex flex-col w-12/12 sm:w-2/12 space-y-2 ml-3 " + classesBlock
            }
          >
            <div className={classesBlockChild + " m-3"}>
              <h5 className="m-3">Thị trường</h5>
              <BTCPrice></BTCPrice>
              <ETHPrice></ETHPrice>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
