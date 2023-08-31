import React, { useEffect, useState } from "react";
import ShortHeader from "../Components/ShortHeader";
import { Link } from "react-router-dom";
import UserService from "../Services/userService";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/authService";

export default function Signup(props) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await UserService.register(inputs);
    navigate("/");
  };

  useEffect(() => {
    if (AuthService.isLogedIn()) {
      navigate("/");
    }
    document.body.classList.add("signup-body");
    return () => {
      document.body.classList.remove("signup-body");
    };
  }, [navigate]);

  return (
    <React.Fragment>
      <ShortHeader />
      <section className="signup-page">
        <div className="signup-content">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              required
              minLength="3"
              maxLength="20"
              placeholder="First name"
              value={inputs.firstName || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              required
              maxLength="20"
              placeholder="Last name"
              value={inputs.lastName || ""}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              maxLength="255"
              placeholder="Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              required
              minLength="8"
              maxLength="20"
              placeholder="Choose password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              minLength="5"
              maxLength="20"
              placeholder="Phone number"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              required
              minLength="5"
              maxLength="2000"
              placeholder="Address"
              value={inputs.address || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="postalCode"
              required
              minLength="6"
              maxLength="6"
              placeholder="Postal Code"
              value={inputs.postalCode || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              required
              minLength="2"
              maxLength="20"
              placeholder="City"
              value={inputs.city || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              required
              minLength="5"
              maxLength="20"
              placeholder="Country"
              value={inputs.country || ""}
              onChange={handleChange}
            />
            <button>Sign up</button>
          </form>
          <Link to="/login">Have account?</Link>
        </div>
      </section>
    </React.Fragment>
  );
}
