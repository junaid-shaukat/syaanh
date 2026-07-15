import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("i18nextLng") ?? "en";
    const currency = localStorage.getItem("currency") ?? "QAR";

    config.headers["Accept-Language"] = lang;
    config.headers["Accept-Currency"] = currency;

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
const UNAUTHENTICATED = 401;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === UNAUTHENTICATED) {
      // Token expired or invalid — server has already cleared the cookie
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;