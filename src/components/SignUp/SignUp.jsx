import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getAllUsers } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

function SignUp() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.users);
  const [errors, setErrors] = useState({});
  const [create, setCreate] = useState({
    userName: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...create,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("Usuario fue creado satisfactoriamente");
      dispatch(createUser(create));
      setCreate({
        userName: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } else {
      alert("Debe completar la informacion para crear el usuario");
    }
  }
  useEffect(() => {
    dispatch(getAllUsers);
  }, [dispatch]);
  function validation(create) {
    let errors = {};

    if (!create.userName) {
      errors.userName = "Debes ingresar el nombre.";
    }

    if (!create.email) {
      errors.email = "Debes ingresar el email.";
    }

    if (!create.password) {
      errors.password = "Debes ingresar la contraseña";
    }
    return errors;
  }

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
          <form onSubmit={(e) => handleSubmit(e)} className="form_container">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="userName"
              name="userName"
              required
              className="input"
              value={create.userName}
              onChange={(e) => handleChange(e)}
            />
            {errors.userName ? <p className="error">{errors.userName}</p> : null}
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
              value={create.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email ? <p className="error">{errors.email}</p> : null}
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
              value={create.password}
              onChange={(e) => handleChange(e)}
            />
           {errors.password ? <p className="error">{errors.password}</p> : null}
            <button type="submit" className="green_btn">
              Sing Up
            </button>
            <button
              type="submit"
              className="green_btn"
              onClick={() => loginWithRedirect()}
            >
              Sing In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
