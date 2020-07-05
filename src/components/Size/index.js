import React from 'react'

function Size({ navigation }){

  const { previous, next } = navigation

  return (
    <div className='wrapper'>
      <h1>Size</h1>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Size
