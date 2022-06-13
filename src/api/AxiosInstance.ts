import axios from "axios";

export default axios.create({
  baseURL: "https://api-basketball.p.rapidapi.com",
  headers: {
    "Content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
  },
});
