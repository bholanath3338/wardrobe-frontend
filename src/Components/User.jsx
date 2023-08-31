import { Link } from "react-router-dom";
import AuthService from "../Services/authService";

export default function User() {
  return (
    <>
      {AuthService.isLogedIn() && AuthService.getUser().firstName}
      {!AuthService.isLogedIn() && (
        <Link to="login">
          <h1>Login</h1>
        </Link>
      )}
    </>
  );
}
