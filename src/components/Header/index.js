import React from 'react'

import './header.scss'
import Logo from './flag.jpg'

function Header(props){
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='header'>
          <img className='header-brand' src = {Logo} alt = 'Logo Pizzaria'/>
          <h1 className='header-title'>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
