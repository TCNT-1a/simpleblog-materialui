"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import svg from "./bitcoin-btc-logo.svg";
import { classesBlockChild } from "@/styles/styles";

export default function BTCPrice() {
  const [price, setPrice] = useState(0);
  const [lastFetch, setLastFetch] = useState("");
  const urlapi = "https://api.coindesk.com/v1/bpi/currentprice.json";
  useEffect(() => {
    const fetchData = () => {
      fetch(urlapi)
        .then((res) => res.json())
        .then((data) => {
          setPrice(data.bpi.USD.rate_float);
          setLastFetch(data.time.updated);
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
            BTC Price: <b>{price}$</b>
          </em>
        </div>
        <small>{lastFetch}</small>
      </div>
    </>
  );
}
