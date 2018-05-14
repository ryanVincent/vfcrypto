import React from 'react';
import styled from 'styled-components';

// TODO:: move vars to theme
const TableHeader = styled.thead`
	background-color: rgb(235,240,244);
	border: 1px solid rgb(207,219,228);
	color: rgb(171,175,198);

	th {
		text-transform: uppercase;
		padding: 5px;
	}
`;

const Cell = ({ title }) => <th>{title}</th>

export default ({ columns = [] }) => (
	<TableHeader>
		<tr>
			{columns.map(column => <Cell key={column} title={column.title} />)}
		</tr>
	</TableHeader>
);