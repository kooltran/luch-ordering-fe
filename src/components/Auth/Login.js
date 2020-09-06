import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { REDIRECT_URL } from "../../constants";
import qs from "query-string";

const Login = props => {
  const { search } = useLocation();
  const history = useHistory();
  const { token } = qs.parse(search);
  const currentToken = token || localStorage.getItem("token");

  if (currentToken) {
    localStorage.setItem("token", currentToken);
    history.push("/");
  } else {
    window.open(REDIRECT_URL, "_self");
  }
  return <div>Login</div>;
};

export default Login;
