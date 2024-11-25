import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-wealth-wise.vercel.app",
});

export default api;
