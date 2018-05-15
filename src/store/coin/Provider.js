import React from 'react';

const DEFAULT_STATE = {
  coins: [],
};

export const CoinContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
	state = DEFAULT_STATE;

	getCoins = async () => {
		const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
		const coins = await response.json();
		this.setState(() => ({
			coins,
		}));
	}

	getCoin = async () => {

	}

  render() {
		console.log(this.getCoins);
    return (
      <CoinContext.Provider
        value={{
          ...this.state,
          getCoins: this.getCoins,
        }}
      >
        {this.props.children}
      </CoinContext.Provider>
    );
  }
}