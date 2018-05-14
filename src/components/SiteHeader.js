import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	padding: 1.5em;
`;

// TODO: move vars to theme
const Title = styled.h1`
	font-weight: 300;
	color: rgb(96,108,131);
	font-size: 32px;
`;

export default () => (
	<Header>
		<Title>VFCrypto</Title>
	</Header>
);