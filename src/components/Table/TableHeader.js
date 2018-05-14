import React from 'react';
import styled from 'styled-components';

// TODO:: move vars to theme
const TableHeader = styled.thead`
	background-color: rgb(235,240,244);
	border: 1px solid rgb(207,219,228);
	color: rgb(171,175,198);
`;

const Th = styled.th`
	text-transform: uppercase;
	text-align: ${props => props.align};
	padding: 10px 24px;
	font-size: 12px;
`

const HeaderCell = ({ columns = [] }) => (
	<TableHeader>
		<tr>
			{columns.map(column => <Th key={column.title} align={column.align}>{column.title}</Th>)}
		</tr>
	</TableHeader>
);

export default HeaderCell;