import React from 'react';

const Cell = ({ component, value }) => {
	return (
		<td>
			{React.createElement(component, { value })}
		</td>
	);
};

export default Cell;