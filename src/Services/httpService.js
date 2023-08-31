import axios from "axios";
import { toast } from "react-toastify";
import AuthService from "./authService";

axios.defaults.headers.common["Authorization"] = AuthService.getToken();

axios.interceptors.response.use(null, (error) => {
  if (
    error.response &&
    error.response.status &&
    error.response.status === 401
  ) {
  }
  if (error.response && error.response.data && error.response.data.err) {
    toast.error(error.response.data.err);
  } else {
    toast.error("Opps! Something went wrong, please try again!!");
  }
  console.log(error);

  return Promise.reject(error.message);
});

export default class HttpService {
  static get = axios.get;
  static post = axios.post;
  static put = axios.put;
  static delete = axios.delete;
}
