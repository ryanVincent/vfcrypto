import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import { withCoins } from 'store/coin/Consumer';

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

const Label = styled.div`
	color: rgb(95,114,140);
	font-size: 12px;
	text-transform: uppercase;
`

const Row = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`

const Cell = styled.div`
	flex: 1;

	${Label} {
		margin-bottom: 15px;
	}
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

const SummaryItem = styled.div`
	color: white;
	align-items: center;
	display: flex;
	font-size: 20px
`;


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
						<Cell>
							<Label>
								market cap
							</Label>
							<SummaryItem><Currency>$</Currency> {numeral(coin.quotes.USD.market_cap).format('0,0.00')}</SummaryItem>
						</Cell>
						<Cell>
							<Label>
								24h volume
							</Label>
							<SummaryItem><Currency>$</Currency> {numeral(coin.quotes.USD.volume_24h).format('0,0.00')}</SummaryItem>
						</Cell>
					</Row>
					<Row>
						<Cell>
							<Label>
								circulating supply
							</Label>
							<SummaryItem>
								{numeral(coin.circulating_supply).format('0,0.00')}
								<CoinSymbol>{coin.symbol}</CoinSymbol>
							</SummaryItem>
						</Cell>
						<Cell>
							<Label>
								total supply
							</Label>
							<SummaryItem>
								{numeral(coin.total_supply).format('0,0.00')}
								<CoinSymbol>{coin.symbol}</CoinSymbol>
							</SummaryItem>
						</Cell>
					</Row>
					</RightColumn>
				</Container>
			</CoinSummary>
		);
	}
}

export default withCoins(Coin);