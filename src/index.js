import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import Header from './components/Header'

ReactDOM.render(
  <>
    <Header title='Pizzaria Peppe In Grani'/>
    <App />
  </>,
  document.getElementById('root'))
