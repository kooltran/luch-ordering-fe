import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import OrderList from "./pages/Orders/OrderList";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Logo from "./assets/logo.svg";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <a href="/" className="main-logo">
          <img src={Logo} alt="logo" />
        </a>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/allOrders" component={OrderList} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
