import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
	padding: 24px;
	border-bottom: 1px solid rgba(207,219,228, 0.5);
	text-align: ${props => props.align};
`;

const Cell = ({ component, value, align, data }) => {

	// TODO: remomve this
	if (component === undefined) return <Td />
	return (
		<Td align={align}>
			{React.createElement(component, { value, data })}
		</Td>
	);
};

Cell.defaultProps = {
	align: 'left',
};

export default Cell;