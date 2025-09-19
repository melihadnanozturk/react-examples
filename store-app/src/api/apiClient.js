import axios from "axios";
import { data } from "react-router";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.response.use(
  (response) => {
    console.log("success");
    return response;
  },
  (error) => {
    console.log("HATAAAAAA VAR HACIIII");

    const { data, status } = error.response;

    switch (status) {
      case 404:
        console.log("404 CASE ICERİSINDEEEE");
        toast.error(data.message);
    }

    return Promise.reject(error.message);
  }
);

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
  post: (url, body) => axios.post(url, body).then((response) => response.data),
  put: (url, body) => axios.put(url, body).then((response) => response.data),
  delete: (url) => axios.get(url).then((response) => response.data),
};

const products = {
  list: () => methods.get("products"),
  details: (id) => methods.get(`products/${id}`),
};

const request = {
  products,
};

export default request;
