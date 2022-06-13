import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL ?? "https://api",
  headers: {
    "Content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY ?? "none",
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST ?? "none",
  },
});
