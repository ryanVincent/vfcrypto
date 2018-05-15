import React, { Component } from 'react';
import Routes from 'routes';
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import CoinProvider from 'store/coin/Provider';
import SiteHeader from 'components/SiteHeader';

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
`

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`

class App extends Component {
  render() {
    baseStyles()
    return (
      <CoinProvider>
        <Container>
          <SiteHeader />
          <Routes />
        </Container>
      </CoinProvider>
    )
  }
}

export default App;
