import axios from "axios";
// import { baseURL } from "../constant/configEndpoints";
import { Cookies } from "react-cookie";
import { cookieKey } from "../constants";
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
  const user_id = cookies.get(cookieKey.userId);
  console.log("userIddd", user_id);
  config.headers = {
    ...config.headers,
    id: user_id,
  };

  return config;
});

export { api };
