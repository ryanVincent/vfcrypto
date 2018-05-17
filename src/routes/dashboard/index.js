import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Table from 'components/Table';
import { CryptoCell, PriceCell, MarketCapCell, TickerCell } from 'routes/dashboard/components/cells';
import { withCoins } from 'store/coin/Consumer';

const CoinTable = styled(Table)`
	width: 100%;
`;

const LastUpdated = styled.div`
	font-size: 10px;
	color: #ccc;
	text-align: center;
	margin-top: 20px;
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

	componentDidMount() {
		const pollInterval = 1000 * 60; // 60 seconds
		this.props.getCoins()
		this.interval = window.setInterval(() => {
			this.props.getCoins()
		}, pollInterval);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	handleRowClick = (row) => {
		const { history } = this.props;
		history.push(`/coin/${row.id}`)
	}

	render() {
		const coins = Object.values(this.props.coins).sort((a, b) => a.rank < b.rank ? -1 : 1)

		return (
			<React.Fragment>
				<CoinTable columns={currencyTableColumns} data={coins} onRowClick={this.handleRowClick} />
				{ this.props.lastUpdated && <LastUpdated>last updated {this.props.lastUpdated.format('dddd, MMMM Do YYYY, h:mm:ss a')}</LastUpdated> }
			</React.Fragment>
		)
	}
};

export default withRouter(
	withCoins(Dashboard)
);