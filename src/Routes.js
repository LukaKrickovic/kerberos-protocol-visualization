import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basics from "./containers/basics";
import SecondMessage from "./containers/basics/messages/secondMessage";
import ThirdMessage from "./containers/basics/messages/thirdMessage";
import LandingPage from "./containers/landingPage";
import pageRoutes from "./pageroutes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={pageRoutes.START}>
          <Basics />
        </Route>
        <Route exact path={pageRoutes.SECOND_STEP}>
          <SecondMessage />
        </Route>
        <Route exact path={pageRoutes.THIRD_STEP}>
          <ThirdMessage />
        </Route>
        <Route exact path={pageRoutes.HOME}>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
