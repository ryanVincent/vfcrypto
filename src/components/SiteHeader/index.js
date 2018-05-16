import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';

import CoinHeader from './CoinHeader'
import DefaultHeader from './DefaultHeader'

const Header = styled.header`
	padding: 1.5em;
`;

export default () => (
	<Header>
    <Switch>
			<Route path="/coin/:id" component={CoinHeader} />
      <Route component={DefaultHeader} />
    </Switch>
	</Header>
);