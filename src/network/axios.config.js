import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  // config.headers = {
  //   ...config.headers,
  //   "X-RapidAPI-Key": "a7477432a5msh121ac36bcab8f65p189851jsn1f6c5b71b87e",
  //   "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  // };

  return config;
});
