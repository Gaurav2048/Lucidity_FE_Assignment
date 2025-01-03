import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.INVENTORY_API, // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;