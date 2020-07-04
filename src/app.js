import React from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'

import './app.scss'

import Text from './components/Content'

function App(props){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='welcome-title'>{props.welcome}</h1>
          <Text />
        </div>
      </div>
    </div>
  )
}

export default App
