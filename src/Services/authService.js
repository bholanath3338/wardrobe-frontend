import jwtDecode from "jwt-decode";

const tokenKey = "access-token";

export default class AuthService {
  static loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
  }

  static logout() {
    localStorage.removeItem(tokenKey);
  }

  static getUser() {
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      return {};
    }

    return jwtDecode(token);
  }

  static getToken() {
    return localStorage.getItem(tokenKey);
  }

  static isLogedIn() {
    return (
      AuthService.getToken() !== undefined && AuthService.getToken() !== null
    );
  }
}
