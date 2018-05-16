import React from 'react';
import { Route } from "react-router-dom";

import Dashboard from 'routes/dashboard';
import Coin from 'routes/coin';

export default () => (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route path="/coin/:id" component={Coin} />
    </React.Fragment>
);