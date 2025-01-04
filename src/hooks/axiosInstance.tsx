import { BASE_URL } from "@/constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
