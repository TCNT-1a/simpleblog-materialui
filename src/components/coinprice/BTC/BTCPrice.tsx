"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import svg from "./bitcoin-btc-logo.svg";
import { classesBlock, classesBlockChild } from "@/styles/styles";
import CoinPrice from "../CoinPrice";

export default function BTCPrice() {
  const [price, setPrice] = useState(0);

  const urlapi = "https://api.coindesk.com/v1/bpi/currentprice.json";
  useEffect(() => {
    const fetchData = () => {
      fetch(urlapi)
        .then((res) => res.json())
        .then((data) => {
          setPrice(data.bpi.USD.rate_float);
        });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return <CoinPrice name="BTC price" svg={svg} price={price}></CoinPrice>;
}
