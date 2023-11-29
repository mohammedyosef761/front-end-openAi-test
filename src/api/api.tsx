import axios from "axios";
// import { baseURL } from "../constant/configEndpoints";
import { Cookies } from "react-cookie";
// import { cookiesKey } from "../constant/cookiesKey";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 200000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const user_id = cookies.get("user_id");
  console.log("user_id", user_id);
  config.headers = {
    ...config.headers,
    id: cookies.get("user_id"),
  };

  return config;
});

export { api };
