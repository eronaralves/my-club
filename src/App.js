import React, { useEffect, useState } from 'react'
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/routes'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100vh;
  }
`

function App() {

  
  return (
    <Router>
      <GlobalStyle/>

      <Routes/>
    </Router>
  )
}

export default App
