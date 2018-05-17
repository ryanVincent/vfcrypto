import React from 'react'
import moment from 'moment'

const DEFAULT_STATE = {
  coins: [],
}

export const CoinContext = React.createContext(DEFAULT_STATE)

export default class Provider extends React.Component {
	state = DEFAULT_STATE

	getCoins = async () => {
		const response = await fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
		const json = await response.json()
		this.setState(() => ({
			coins: json.data,
			lastUpdated: moment()
		}))
	}

	getCoin = async (id) => {
		const response = await fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/`)
		const json = await response.json()
		const coin = json.data

		const nextCoins = {
			...this.state.coins,
			[coin.id]: coin,
		}
		this.setState((prevState) => ({
			coins: nextCoins
		}))
	}

  render() {
    return (
      <CoinContext.Provider
        value={{
          ...this.state,
					getCoins: this.getCoins,
					getCoin: this.getCoin,
        }}
      >
        {this.props.children}
      </CoinContext.Provider>
    )
  }
}