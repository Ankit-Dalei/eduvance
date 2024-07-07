import axios from "axios";
import { BASE_URL } from "./Url";
export const publicAxios = axios.create({
    baseURL: BASE_URL,
  });
  export const privateAxios = axios.create({
    baseURL: BASE_URL,
  });