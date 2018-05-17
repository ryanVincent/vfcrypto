import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Table from 'components/Table';
import currencyTableColumns from 'routes/dashboard/columns';

import { withCoins } from 'store/coin/Consumer';

const CoinTable = styled(Table)`
	width: 100%;

	tr:hover {
		cursor: pointer;
		background-color: #fcfcfc;
	}
`;

const LastUpdated = styled.div`
	font-size: 10px;
	color: #ccc;
	text-align: center;
	margin-top: 20px;
`;

class Dashboard extends React.Component {

	componentDidMount() {
		const pollInterval = 1000 * 60 // 60 seconds

		this.props.getCoins()
		this.interval = window.setInterval(() => {
			this.props.getCoins()
		}, pollInterval)
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