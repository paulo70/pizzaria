import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './app.scss'

import Content from './components/Content'

function App(props){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='welcome-title'>{props.welcome}</h1>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
