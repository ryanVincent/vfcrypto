import React from 'react';
import Table from 'components/Table';
import styled from 'styled-components';
import { CryptoCell, CurrencyCell, TickerCell } from 'routes/dashboard/components/cells';

const currencyTableColumns = [
	{
		title: 'cryptocurrency',
		component: CryptoCell,
		path: ['name'],
	},
	{
		title: 'price',
		component: CurrencyCell,
		path: ['price_usd'],
	},
	{
		title: 'market cap',
		component: CurrencyCell,
		path: ['market_cap_usd'],
	},
	{
		title: '24h change',
		component: TickerCell,
		path: ['percent_change_24h'],
	},
];

const CoinTable = styled(Table)`
	width: 100%;
`;

const data = [
{
		id: "bitcoin",
		name: "Bitcoin",
		symbol: "BTC",
		rank: "1",
		price_usd: "8844.21",
		price_btc: "1.0",
		market_cap_usd: "150648956561",
		total_supply: "17033625.0",
		max_supply: "21000000.0",
		percent_change_1h: "-0.14",
		percent_change_24h: "1.19",
		percent_change_7d: "-5.95",
		last_updated: "1526334872",
		price_jpy: "967786.52346",
		market_cap_jpy: "16484912720671"
}
];

const Dashboard = ({ id }) => <div>
	<CoinTable columns={currencyTableColumns} data={data} />
</div>;

export default Dashboard;