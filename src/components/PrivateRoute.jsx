import React from "react";
import { Routes, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, children, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Routes
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : navigate("/login")
      }
    />
  );
};

export default PrivateRoute;
