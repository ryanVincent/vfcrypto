import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import { withCoins } from 'store/coin/Consumer';

import Label from 'routes/coin/components/Label'
import SummaryCell from 'routes/coin/components/SummaryCell';

const Currency = styled.span`
	color: rgb(95,114,140);
	margin-right: 5px;
`

const CoinSymbol = styled.span`
	color: rgb(47,198,133);
	font-size: 12px;
	margin-left: 5px;
`

const CoinSummary = styled.div`
	flex: 1;
  background: linear-gradient(to right, rgb(18,36,60), rgb(28,50,80));
`

const Rank = styled.div`
	border-radius: 50%;
	background-color: rgb(31,57,89);
	color: rgb(105,168,230);
	height: 50px;
	width: 50px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`


const Row = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`



const LeftColumn = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	${Label} {
		margin-right: 10px;
	}
`

const RightColumn = styled.div`
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	height: 100%;
`

const Container = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	height: 25%;
	align-items: center;
	color: rgb(94,103,109);
`

class Coin extends React.Component {
	componentWillMount() {
		const { coins, getCoin, match} = this.props;

		if (!coins[match.params.id]) {
			getCoin(match.params.id)
		}
	}

	render() {
		const { coins, match } = this.props;

		const coin = coins[match.params.id];
		if (!coin) return <div></div>
		return (
			<CoinSummary>
				<Container>
					<LeftColumn>
						<Label>
							rank
						</Label>
						<Rank>
							{coin.rank}
						</Rank>
					</LeftColumn>
					<RightColumn>
					<Row>
						<SummaryCell label="market cap">
							<Currency>$</Currency> {numeral(coin.quotes.USD.market_cap).format('0,0.00')}
						</SummaryCell>
						<SummaryCell label="m24h volume">
							<Currency>$</Currency> {numeral(coin.quotes.USD.volume_24h).format('0,0.00')}
						</SummaryCell>
					</Row>
					<Row>
						<SummaryCell label="circulating supply">
							{numeral(coin.circulating_supply).format('0,0.00')} <CoinSymbol>{coin.symbol}</CoinSymbol>
						</SummaryCell>
						<SummaryCell label="total supply">
							{numeral(coin.total_supply).format('0,0.00')} <CoinSymbol>{coin.symbol}</CoinSymbol>
						</SummaryCell>
					</Row>
					</RightColumn>
				</Container>
			</CoinSummary>
		);
	}
}

export default withCoins(Coin);