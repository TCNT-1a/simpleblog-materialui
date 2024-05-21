//https://api.coinbase.com/v2/prices/ETH-USD/spot

"use client";
import { useEffect, useState } from "react";
import svg from "./ethereum-eth.svg";

import CoinPrice from "../CoinPrice";

export default function ETHPrice() {
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
        });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CoinPrice name="BTC price" svg={svg} price={parseFloat(price)}></CoinPrice>
  );
}
