import axios from "axios";
import { useAuth, useToken } from "@/stores";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL + "/api",
});

axiosInstance.interceptors.request.use(
function (config) {
    const token = useToken();
    config.headers['Authorization'] = `Bearer ${token.getToken}`;
    return config;
}, function (error) {
return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const authInfo = useAuth();
      const token = useToken();
      authInfo.user = {};
      token.$reset();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
