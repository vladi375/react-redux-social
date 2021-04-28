import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainPage, UsersPage, SignInPageContainer, Profile } from "../pages";

import { Navbar } from "../components";
import { ROUTES } from "../const";

class Navigator extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={"/users/:index"} component={Profile} />
          <Route path={ROUTES.USERS} component={UsersPage} />
          <Route path={ROUTES.SIGNIN} component={SignInPageContainer} />
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator;
