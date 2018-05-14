import React from 'react';
import numeral from 'numeral';
export const CryptoCell = ({ value }) => (
	<div>
		{value}
	</div>
);

export const PriceCell = ({ value }) => (
	<div>
		$ {numeral(value).format('0,0.00')}
	</div>
);

export const MarketCapCell = ({ value }) => (
	<div>
		$ {numeral(value).format('0,0.00')}
	</div>
);

export const TickerCell = ({ value }) => (
	<div>
		{value}
	</div>
);