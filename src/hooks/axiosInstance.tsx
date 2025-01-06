import axios from "axios";

console.log(import.meta.env.VITE_INVENTORY_BASE_URL)

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_INVENTORY_BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
