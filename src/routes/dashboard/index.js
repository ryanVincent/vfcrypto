import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Table from 'components/Table';
import { CryptoCell, PriceCell, MarketCapCell, TickerCell } from 'routes/dashboard/components/cells';

const CoinTable = styled(Table)`
	width: 100%;
`;
// TODO: move this out & fix empty column mechanism
const currencyTableColumns = [
	{
		path: [],
	},
	{
		path: [],
	},
	{
		path: [],
	},
	{
		title: 'cryptocurrency',
		component: CryptoCell,
		path: ['name'],
		align: 'left',
	},
	{
		title: 'price',
		component: PriceCell,
		path: ['price_usd'],
		align: 'left',
	},
	{
		title: 'market cap',
		component: MarketCapCell,
		path: ['market_cap_usd'],
		align: 'left',
	},
	{
		title: '24h change',
		component: TickerCell,
		path: ['percent_change_24h'],
		align: 'right',
	},
	{
		path: [],
	},
	{
		path: [],
	},
	{
		path: [],
	},
];

class Dashboard extends React.Component {
	state = {
		coins: []
	}
	async componentDidMount() {
		// TODO: refactor
		const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
		const coins = await response.json();
		this.setState(() => ({
			coins,
		}));
	}

	handleRowClick = (row) => {
		console.log(row);
		const { history } = this.props;
		history.push(`/coin/${row.id}`)
	}

	render() {
		return <CoinTable columns={currencyTableColumns} data={this.state.coins} onRowClick={this.handleRowClick} />
	}
};

export default withRouter(Dashboard);