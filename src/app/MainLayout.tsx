import React from "react";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar/leftbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

import BTCPrice from "@/components/coinprice/BTC/BTCPrice";
import ETHPrice from "@/components/coinprice/ETH/ETHPrice";
import Link from "next/link";
import { GrayBox, WhiteBox } from "@/components/Container/Box";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex flex-col sm:flex-row pt-4 space-x-2">
        <div className="w-12/12 sm:w-3/12">
          <LeftBar />
        </div>
        <div className="w-12/12 sm:w-9/12 flex flex-col sm:flex-row space-x-2">
          <div className={"flex flex-col w-12/12 sm:w-10/12"}>{children}</div>
          <div className={"flex flex-col w-12/12 sm:w-2/12"}>
            <RightBar></RightBar>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBar() {
  return (
    <WhiteBox>
      <GrayBox title="Contact Us">
        <AweSomeIcon
          href="https://www.facebook.com"
          icon={faFacebookSquare}
          title="Facebook"
        ></AweSomeIcon>
        <AweSomeIcon
          href="https://t.me/your_telegram_channel"
          icon={faTelegramPlane}
          title="Telegram"
        ></AweSomeIcon>
      </GrayBox>

      <GrayBox title="Thị trường">
        <BTCPrice></BTCPrice>
        <ETHPrice></ETHPrice>
      </GrayBox>
    </WhiteBox>
  );
}
function AweSomeIcon({
  icon,
  href,
  title,
}: {
  icon: any;
  href: string;
  title: string;
}) {
  return (
    <WhiteBox hoverable={true}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={icon} width={20} />
        <span>{title}</span>
      </Link>
    </WhiteBox>
  );
}
