import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from 'routes/dashboard';
import Coin from 'routes/coin';

export default () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route path="/coin/:id" component={Coin} />
    </React.Fragment>
  </Router>
);