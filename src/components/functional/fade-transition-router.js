import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from '../constructs/layout/layout-view'

const FadeTransitionRouter = props => (
    <Location>
        {({ location }) => (
          // <TransitionGroup className="transition-group">
            // <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Layout location={location.pathname}>
                <Router location={location}>
                  {props.children}
                </Router>
              </Layout>
            // </CSSTransition>
          // </TransitionGroup>
        )}
    </Location>
  );

export default FadeTransitionRouter