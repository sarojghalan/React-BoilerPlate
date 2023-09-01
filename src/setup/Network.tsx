  import axios from "axios";

  console.log(import.meta.env.VITE_BASE_URL);
  //creating instance of axiosds
  const Service = axios?.create({
    baseURL: "http://localhost:5555",
  });
  console.log(Service);
  // Adding a request interceptor
  Service.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (err) {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  export default Service;
