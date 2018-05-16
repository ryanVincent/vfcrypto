import React from 'react'
import styled from 'styled-components'

import Label from 'routes/coin/components/Label'

const Cell = styled.div`
flex: 1;

${Label} {
	margin-bottom: 15px;
}
`

const SummaryItem = styled.div`
	color: white;
	align-items: center;
	display: flex;
	font-size: 20px
`

export default ({ children, label }) => (
	<Cell>
		<Label>
			market cap
		</Label>
		<SummaryItem>
			{children}
		</SummaryItem>
	</Cell>
)