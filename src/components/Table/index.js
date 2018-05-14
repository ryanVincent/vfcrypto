import React from 'react';
import styled from 'styled-components';
import TableHeader from 'components/Table/TableHeader';
import TableCell from 'components/Table/TableCell';

// TODO: move to utils or replace with lodash getIn
const pathReducer = (agg, currentVal) => agg && agg[currentVal];
const getIn = (obj, path, defaultValue) => path.reduce(pathReducer, obj) || defaultValue;

const Table = ({ columns, data, className }) => (
	<table className={className}>
		<TableHeader columns={columns} />
		{data.map(row => (
			<tr>
				{
					columns.map(column => (
						<TableCell component={column.component} value={getIn(row, column.path)} />
					))
				}
			</tr>
		))}
	</table>
);

export default Table;