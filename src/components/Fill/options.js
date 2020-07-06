import React from 'react'

import Mock from './mocks'

function Options(){
  return (
    <>
    {Mock.map((item, index) => (
      <option value = {item.fill} key={index}>{item.description_fill}</option>
    ))}
    </>
  )
}

export default Options
