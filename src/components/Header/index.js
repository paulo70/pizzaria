import React from 'react'

import './header.scss'

function Header(props){
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='header'>
          <h1 className='header-title'>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
