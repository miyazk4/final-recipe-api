import React from "react";
import App from "../App";
import Recipe from "./recipe";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/recipe/:id" component={Recipe}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
