import React from "react";
import App from "../App";
import E404 from "./e404";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route>
        <E404 />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
