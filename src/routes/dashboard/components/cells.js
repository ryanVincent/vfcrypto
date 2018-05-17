import React from 'react';
import styled from 'styled-components'
import CoinIcon from 'components/CoinIcon'
import { currency } from 'utilities/formatters';
const CryptoCellInner = styled.div`
	display: flex;
	align-items: center;
	color: rgb(96,108,131);
`

const Rank = styled.span`
	color: grey;
	margin-right: 24px;
	font-size: 12px;
	font-weight: bold;
`

const Title = styled.span`
	color: rgb(96,108,131);
	font-size: 14px;
`

const PriceCellInner = styled.div`
	color: rgb(96,108,131);
	font-size: 16px;
	display: flex;
	align-items: center;
`;

const MarketCapCellInner = styled.div`
	color: rgb(96,108,131);
	font-size: 12px;
	display: flex;
	align-items: center;
`
// TODO: should be cast to number higher up
const TickerCellInner = styled.div`
	color: rgb(96,108,131);
	font-size: 12px;
	font-weight: bold;
	color: ${props => parseInt(props.value, 10) > 0 ? 'rgb(42,192,124)' : 'red'}
`

const CurrencySymbol = styled.span`
	color: #ccc;
	margin-right: 5px;
`;

export const CryptoCell = ({ data }) => (
	<CryptoCellInner>
		<Rank>
			{data.rank}
		</Rank>
		<CoinIcon symbol={data.symbol} />
		<Title>
			{data.name}
		</Title>
	</CryptoCellInner>
);

export const PriceCell = ({ data }) => (
	<PriceCellInner>
		<CurrencySymbol>$</CurrencySymbol> {currency(data.quotes.USD.price)}
	</PriceCellInner>
);

export const MarketCapCell = ({ data }) => (
	<MarketCapCellInner>
		<CurrencySymbol>$</CurrencySymbol> {currency(data.quotes.USD.market_cap)}
	</MarketCapCellInner>
);

export const TickerCell = ({ data }) => (
	<TickerCellInner value={data.quotes.USD.percent_change_24h}>
		{/* TODO: tidy this up */}
		{Math.abs(data.quotes.USD.percent_change_24h)} % { parseInt(data.quotes.USD.percent_change_24h, 10) > 0 ? '↑' : '↓' }
	</TickerCellInner>
);