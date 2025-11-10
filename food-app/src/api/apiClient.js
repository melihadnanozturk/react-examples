import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(async (request) => {
  const { store } = await import("../store/store");

  const publicUrls = ["api/auth/login", "api/auth/signin"];

  if (!publicUrls.includes(request.url)) {
    const token = localStorage.getItem("token");

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.error(
        "TOKEN MISSING: A token is required for this route but was not found."
      );
    }
  }
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
  create: (body) => methods.post(`food/admin`, body),
};

const auth = {
  login: (body) => methods.post("api/auth/login", body),
  signIn: (body) => methods.post("api/auth/sign", body),
  getMe: (body) => methods.post("api/auth/me", body),
};

const request = {
  foods,
  auth,
};

export default request;
