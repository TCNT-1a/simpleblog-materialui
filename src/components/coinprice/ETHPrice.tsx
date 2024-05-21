//https://api.coinbase.com/v2/prices/ETH-USD/spot

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import svg from "./ethereum.svg";
import { classesBlockChild } from "@/styles/styles";

export default function BTCPrice() {
  const [price, setPrice] = useState("");
  //   const [lastFetch, setLastFetch] = useState("");
  const urlapi = "https://api.coinbase.com/v2/prices/ETH-USD/spot";
  useEffect(() => {
    const fetchData = () => {
      fetch(urlapi)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPrice(data.data.amount);
          //   setLastFetch(data.time.updated);
        });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={classesBlockChild + "flex flex-col w-[120px] m-5"}>
        <div>
          <Image
            src={svg}
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <em className="color-white">
            ETH Price: <b>{price}$</b>
          </em>
        </div>
        {/* <small>{lastFetch}</small> */}
      </div>
    </>
  );
}
