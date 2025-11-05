import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((request) => {
  const dummyToken = "denemeToken";
  request.headers.Authorization = `Bearer ${dummyToken}`;

  return request;
});

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
  post: (url, body) => axios.post(url, body).then((response) => response.data),
  delete: (url) => axios.delete(url).then((response) => response.data),
};

const foods = {
  list: () => methods.get("food"),
  details: (id) => methods.get(`food/${id}`),
  delete: (id) => methods.delete(`food/${id}`),
  create: (body) => methods.post(`food`, body),
};

const auth = {
  login: (body) => methods.post("api/auth/login", body),
  signIn: (body) => methods.post("api/auth/sign", body),
};

const request = {
  foods,
  auth,
};

export default request;
