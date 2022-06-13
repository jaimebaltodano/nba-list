import axios from "axios";

export default axios.create({
  baseURL: "https://api-basketball.p.rapidapi.com",
  headers: {
    "Content-type": "application/json",
    "X-RapidAPI-Key": "41f37844f5msh07fac825a4f54f3p1f0934jsn28349f64df74",
    "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
  },
});
