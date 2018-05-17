import { CryptoCell, PriceCell, MarketCapCell, TickerCell } from 'routes/dashboard/components/cells';

export default [
	{},
	{},
	{},
	{
		title: 'cryptocurrency',
		component: CryptoCell,
		align: 'left',
	},
	{
		title: 'price',
		component: PriceCell,
		align: 'left',
	},
	{
		title: 'market cap',
		component: MarketCapCell,
		align: 'left',
	},
	{
		title: '24h change',
		component: TickerCell,
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