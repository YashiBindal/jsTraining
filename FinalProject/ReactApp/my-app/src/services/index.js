import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:9090",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // console.log("token", token);
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;

export * from "./department";
export * from "./employee";
export * from "./user";
