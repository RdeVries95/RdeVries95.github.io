import React from "react";
import { Router, Location } from "@reach/router";

const FadeTransitionRouter = (props) => (
  <Location>
    {({ location }) => <Router location={location}>{props.children}</Router>}
  </Location>
);

export default FadeTransitionRouter;
