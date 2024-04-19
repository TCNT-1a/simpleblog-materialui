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
