import React, { Component } from 'react';
import Routes from 'routes';
import SiteHeader from 'components/SiteHeader';
import logo from './logo.svg';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

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
      <Container>
        <SiteHeader />
        <Routes />
      </Container>
    )
  }
}

export default App;
