import axios from "axios";
import { Cookies } from "react-cookie";
import { cookieKey } from "../constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 200000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const cookies = new Cookies();
  const user_id = cookies.get(cookieKey.userId);
  config.headers = {
    ...config.headers,
    id: user_id,
  };

  return config;
});

export { api };
