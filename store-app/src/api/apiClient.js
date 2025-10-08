import axios from "axios";
import { data } from "react-router";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
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

const cart = {
  get: () => methods.get("carts"),
  addItem: (productId, quantity = 1) =>
    methods.post(`carts?productId=${productId}&quantity=${quantity}`),
  deleteItem: (productId, quantity = 1) =>
    methods.delete(`carts?productId=${productId}&quantity=${quantity}`),
};

const request = {
  products,
  cart,
};

export default request;
