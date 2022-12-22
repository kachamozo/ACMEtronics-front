import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left-left">
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sing in
            </button>
          </Link>
        </div>
        <div className="right-right">
          <form className="form_container">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
            />

            <button type="submit" className="green_btn">
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
