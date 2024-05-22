// api.js
import axios from "axios";
import Cookies from "js-cookie";
import { backend_api } from "../../api.config";
import { HOST } from "./app.config";

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
  const url = `${HOST}/${path}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export async function getPageInfo(): Promise<PageInfor> {
  const { data } = await getApi2(`api/page-info`);
  if (data) {
    const { attributes } = data;
    const { branchName, metaHomePage, contacts } = attributes;
    return { branchName, metaHomePage, contacts };
  } else {
    return { branchName: "", metaHomePage: "", contacts: "" };
  }
}
type PageInfor = {
  branchName: NonNullable<string>;
  metaHomePage: NonNullable<string>;
  contacts: NonNullable<string>;
};
