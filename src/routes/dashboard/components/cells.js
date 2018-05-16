import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';

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

const Icon = styled.img`
	margin-right: 12px;
	width: 25px;
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

export const CryptoCell = ({ value, data }) => (
	<CryptoCellInner>
		<Rank>
			{data.rank}
		</Rank>
		{/* TODO: fix this */}
		<Icon src={`http://cryptoicons.co/svg/color/${data.symbol.toLowerCase()}.svg`} alt="Bitcoin" />
		<Title>
			{value}
		</Title>
	</CryptoCellInner>
);

export const PriceCell = ({ data }) => (
	<PriceCellInner>
		<CurrencySymbol>$</CurrencySymbol> {numeral(data.quotes.USD.price).format('0,0.00')}
	</PriceCellInner>
);

export const MarketCapCell = ({ data }) => (
	<MarketCapCellInner>
		<CurrencySymbol>$</CurrencySymbol> {numeral(data.quotes.USD.market_cap).format('0,0.00')}
	</MarketCapCellInner>
);

export const TickerCell = ({ data }) => (
	<TickerCellInner value={data.quotes.USD.percent_change_24h}>
		{/* TODO: tidy this up */}
		{Math.abs(data.quotes.USD.percent_change_24h)} % { parseInt(data.quotes.USD.percent_change_24h, 10) > 0 ? '↑' : '↓' }
	</TickerCellInner>
);