import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { withCoins } from 'store/coin/Consumer'
import CoinIcon from 'components/CoinIcon'
import { currency } from 'utilities/formatters';

const StyledLink = styled(Link)`
	background-color: rgb(231,242,252);
	color: rgb(105,168,239);
	border-radius: 50%;
	width: 30px;
	height: 30px;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
`
const Header = styled.div`
	display: flex;
	align-items: center;
	color: rgb(96,108,131);

	img {
		width: initial;
	}
`
const Name = styled.div`
	font-size: 18px;
`

const Symbol = styled.div`
	font-size: 12px;
`

const Title = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 30px;
`

const Price = styled.div`

`

const CoinHeader = ({ coins, match }) => {
	const coin = coins[match.params.id]

	if (!coin) return null

	return (
		<Header>
			<StyledLink to="/">
				←
			</StyledLink>
			<CoinIcon symbol={coin.symbol} />
			<Title>
				<Name>
					{coin.name}
				</Name>
				<Symbol>
					{coin.symbol}
				</Symbol>
			</Title>
			<Price>
				$ {currency(coin.quotes.USD.price)}
			</Price>
		</Header>
	)

}

export default withCoins(CoinHeader)