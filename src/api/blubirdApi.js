import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const blubirdApi = axios.create({
  baseURL: VITE_API_URL,
});

blubirdApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "user-token": localStorage.getItem("token"),
  };

  return config;
});

export default blubirdApi;
