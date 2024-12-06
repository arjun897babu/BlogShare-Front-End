import axios from "axios";

const { VITE_API_ROUTE } = import.meta.env;

export const endPoint = {
  login: "/auth/login",
  signup: "/auth/signup",
  logout: "/auth/logout",
  posts: "/posts",
  post: (id: string) => `/posts/${id}`,
};

const serverInstance = axios.create({
  withCredentials: true,
  baseURL: VITE_API_ROUTE,
});

export default serverInstance;
