  import axios from "axios";

  //creating instance of axiosds
  const Service = axios?.create({
    baseURL: "http://localhost:5555",
  });


  // Adding a request interceptor
  Service.interceptors.request.use(
    function (config) {
      const token:string ="adsgfdsfasdfasdfasdfsadf";
      if (token) {
        // If the token is available, add it to the request headers
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        // If the token is not available, throw an error
       console.log("token is not available.")
      }
      // Do something before request is sent
      return config;
    },
    function (err) {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  export default Service;
