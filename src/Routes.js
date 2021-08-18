import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basics from "./containers/basics";
import SecondMessage from "./containers/basics/messages/secondMessage";
import pageRoutes from "./pageroutes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={pageRoutes.START}>
          <Basics></Basics>
        </Route>
        <Route exact path={pageRoutes.SECOND_STEP}>
          <SecondMessage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
