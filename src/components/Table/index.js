import React from 'react';
import styled from 'styled-components';
import TableHeader from 'components/Table/TableHeader';
import TableCell from 'components/Table/TableCell';

const Table = ({ columns, data, className, onRowClick }) => (
	<table className={className}>
		<TableHeader columns={columns} />
		<tbody>
			{data.map(row => (
				// TODO: refactor
				<tr onClick={() => onRowClick(row)}>
					{
						columns.map(column => (
							<TableCell component={column.component} align={column.align} data={row} />
						))
					}
				</tr>
			))}
		</tbody>
	</table>
);

export default Table;