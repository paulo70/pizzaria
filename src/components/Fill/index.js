import React from 'react'

function Fill ({ navigation }){

  const { previous, next } = navigation

  return (
    <div className='wrapper'>
      <h1>Fill</h1>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Fill
