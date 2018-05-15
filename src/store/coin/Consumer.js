import React from 'react';
import { CoinContext } from "./Provider";

export const withCoins =  (WrappedComponent) => (props) => (
	<CoinContext.Consumer>

		{state => <WrappedComponent blah={state} {...state} {...props} />}
	</CoinContext.Consumer>
)