import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import CoinProvider from 'store/coin/Provider';
import SiteHeader from 'components/SiteHeader';

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
  html, body, #root {
    height: 100%;
  }
`

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  height  : 100%;
  flex-direction: column;
`

class App extends Component {
  render() {
    baseStyles()
    return (
      <CoinProvider>
        <Router>
          <Container>
            <SiteHeader />
            <Routes />
          </Container>
        </Router>
      </CoinProvider>
    )
  }
}

export default App;
