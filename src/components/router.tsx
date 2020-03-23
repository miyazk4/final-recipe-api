import React from "react";
import App from "../App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
