import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
	margin-right: 12px;
	width: 25px;
`

export const CoinIcon = ({ symbol, className }) => {
	return (
		<Icon className={className} src={`http://cryptoicons.co/svg/color/${symbol.toLowerCase()}.svg`} />
	)
}

export default CoinIcon