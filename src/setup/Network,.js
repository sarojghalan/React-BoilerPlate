import axios from "axios";

const Service = axios?.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

Service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default Service;
