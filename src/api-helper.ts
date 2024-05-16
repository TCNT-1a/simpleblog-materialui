// api.js
import axios from "axios";
import Cookies from "js-cookie";
import { backend_api } from "../api.config";

export function getApi() {
  const token = Cookies.get("token");
  console.log(token);
  return axios.create({
    baseURL: backend_api,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getApi2(path: string) {
  const host = "http://localhost:1337";
  const url = `${host}/${path}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}
