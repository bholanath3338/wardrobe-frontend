import { contants } from "../Contants/contants";
import AuthService from "./authService";
import HttpService from "./httpService";

export default class UserService {
  static async register(data) {
    let { data: responseData } = await HttpService.post(
      contants.apiEndPoint + "/user",
      data
    );
    AuthService.loginWithJwt(responseData.data.token);
  }

  static async login(data) {
    let { data: responseData } = await HttpService.post(
      contants.apiEndPoint + "/auth",
      data
    );
    AuthService.loginWithJwt(responseData.data.token);
  }
}
