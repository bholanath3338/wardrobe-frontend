import React, { useEffect, useState } from "react";
import ShortHeader from "../Components/ShortHeader";
import { Link } from "react-router-dom";
import UserService from "../Services/userService";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/authService";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await UserService.login(inputs);
    navigate("/");
  };
  useEffect(() => {
    if (AuthService.isLogedIn()) {
      navigate("/");
    }
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, [navigate]);
  return (
    <React.Fragment>
      <ShortHeader />
      <main id="main" className="">
        <section className="login-page">
          <div className="login-content">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                name="email"
                maxLength="255"
                placeholder="Email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
              <input
                type="password"
                required
                name="password"
                minLength="8"
                maxLength="20"
                placeholder="Password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
              <button>Sign in</button>
            </form>{" "}
            <Link to="/sign-up">Don't have an account?</Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
