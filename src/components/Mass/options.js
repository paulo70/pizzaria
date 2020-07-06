import React from 'react'

import Mock from './mocks'

function Options(){
  return (
    <>
    {Mock.map((item, index) => (
      <option value = {item.mass} key={index}>{item.description_mass}</option>
    ))}
    </>
  )
}

export default Options
