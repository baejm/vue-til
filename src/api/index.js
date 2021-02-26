import axios from "axios";
import { setInterceptors } from "@/utils/interceptor";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

function signup(data) {
  return instance.post("signup", data);
}
function login(data) {
  return instance.post("login", data);
}

const instanceWithAUth = setInterceptors(instance);

function fetchPosts() {
  return instanceWithAUth.get("/posts");
}

export { signup, login, fetchPosts };
