import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "0affdc3067msh48a41702c1a693dp1befdbjsn111d611b5d95",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});
export default api;
