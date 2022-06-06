import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

// import Index from "views/Index.js";
// import LandingPage from "views/examples/LandingPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import Register from "pages/register/Register.js";
// import ProfilePage from "views/examples/ProfilePage.js";
import Home from "pages/home/Home";
import Events from "pages/events/Events";
import Rules from "pages/Rules/Rules";
import Members from "pages/members/Members";

import EventsComponent from "components/EventsComponent/EventsComponent";
import GalleryPage from "pages/gallery/GalleryPage";
import { Aboutus } from "pages/Aboutus/Aboutus";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/pranathi" render={() => <Home></Home>}></Route>
      <Route exact path="/events" render={() => <Events />}></Route>
      <Route exact path="/rules" render={() => <Rules />}></Route>
      <Route exact path="/members" render={() => <Members />}></Route>
      <Route exact path="/Gallerypage" render={() => <GalleryPage />}></Route>
      <Route exact path="/aboutus" render={() => <Aboutus />}></Route>
      <Route path="/event/:id" render={() => <EventsComponent />}></Route>
      {/* <Route
        path="/register-page"
        render={(props) => <Register {...props} />}
      /> */}
      <Redirect from="/" to="/pranathi" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
