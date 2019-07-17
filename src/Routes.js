import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

export default ({ childProps }) => {
  return <Switch>
    <Route path="/:name" exact component={Home} props={childProps} />
    <Route path='/' exact component={Home} props = {childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={Home} />
  </Switch>;
}
