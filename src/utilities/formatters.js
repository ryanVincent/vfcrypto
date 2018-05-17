import numeral from 'numeral';

export const currency = v => numeral(v).format('0,0.00')
