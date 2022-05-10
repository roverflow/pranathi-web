import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import Register from "pages/register/Register.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Home from "pages/home/Home";
import Events from "pages/events/Events";
import Rules from "pages/Rules/Rules";
import Members from "pages/members/Members";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route path="/pranathi" render={() => <Home></Home>}></Route>
      <Route path="/events" render={() => <Events />}></Route>
      <Route path="/rules" render={() => <Rules />}></Route>
      <Route path="/members" render={() => <Members />}></Route>
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/pranathi" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
