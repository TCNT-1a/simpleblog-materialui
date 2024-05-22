"use client";
import Image from "next/image";
import { WhiteBox } from "../Container/Box";

export default function CoinPrice({
  name,
  svg,
  price,
}: {
  name: string;
  svg: any;
  price: number;
}) {
  return (
    <>
      <WhiteBox hoverable={true}>
        <div>
          <Image
            src={svg}
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <em className="color-white">
            {name}: <b>{Math.round(price)}$</b>
          </em>
        </div>
      </WhiteBox>
    </>
  );
}
