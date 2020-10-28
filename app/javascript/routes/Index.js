import React from "react";
import { Route, IndexRoute } from "react-router";

import App from '../App';
import Home from '../views/Home/Index';

export default (
  <Route path="/" exact component={App}>
    <IndexRoute component={Home} />
  </Route>
);
