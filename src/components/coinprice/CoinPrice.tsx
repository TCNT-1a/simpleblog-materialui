"use client";
import Image from "next/image";
import { classesBlockChild } from "@/styles/styles";

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
      <div className={classesBlockChild + " flex flex-col m-2"}>
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
      </div>
    </>
  );
}
