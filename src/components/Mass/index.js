import React from 'react'

function Mass ({ navigation }){

  const { next } = navigation

  return (
    <div className='wrapper'>
      <h1>Escolha a massa</h1>
      <button onClick={next}>Next</button>
    </div>
  )
}


export default Mass
