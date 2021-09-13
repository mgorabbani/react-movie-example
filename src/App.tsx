import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'

import Menu from './components/Menu'
import Routes from './routes'

const App = () => (
  <BrowserRouter>
    <Container>
      <Menu />
      <Routes />
    </Container>
  </BrowserRouter>
)

export default App
