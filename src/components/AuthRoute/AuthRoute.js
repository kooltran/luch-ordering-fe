import React from "react";
import { Route, Redirect } from "react-router-dom";
import { REDIRECT_URL } from "../../constants";

const AuthRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log("kaka");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? <Component /> : window.open(REDIRECT_URL, "_self")
      }
    />
  );
};

export default AuthRoute;
