// api.js
import axios from "axios";
import Cookies from "js-cookie";

import { HOST } from "./app.config";

export function getApi() {
  return axios.create({
    baseURL: HOST,
  });
}

export function getApiAuth() {
  const token = Cookies.get("token");
  return axios.create({
    baseURL: HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getApi2(path: string) {
  const url = `${HOST}/${path}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export async function getPageInfo(): Promise<PageInfor> {
  const { data } = await getApi2(`api/page-info`);
  if (data) {
    const { attributes } = data;
    const { branchName, contacts } = attributes;
    return { branchName, contacts };
  } else {
    return { branchName: "", contacts: "" };
  }
}
type PageInfor = {
  branchName: NonNullable<string>;
  contacts: NonNullable<string>;
};
