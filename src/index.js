import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  <>
    <Header title='Pizzaria Peppe In Grani'/>
    <App welcome='Seja Bem-Vindo a Peppe In Grani'/>
    <Footer />
  </>,
  document.getElementById('root'))
