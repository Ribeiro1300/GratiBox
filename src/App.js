import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/reset.css";
import React from "react";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Subscription from "./pages/subscription/Subscription";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/subscription/:userId" exact>
          <Subscription />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
