import React from 'react'

import Mock from './mocks'

function Options(){
  return (
    <>
      {Mock.map((item, index) => (
        <option value = {item.size} key={index}>{item.description_size}</option>
      ))}
    </>
  )
}

export default Options
