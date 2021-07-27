import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import About from "views/Aboutus/Aboutus.js";
import Privacy from "views/LandingPage/Privacy";
import Terms from "views/LandingPage/Terms";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route exact={true} path="/profile-page" component={ProfilePage} />
      <Route exact={true} path="/login-page" component={LoginPage} />
      <Route exact={true} path="/aboutus" component={About} />
      <Route exact={true} path="/privacy" component={Privacy} />
      <Route exact={true} path="/terms" component={Terms} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
