import React from 'react'
import { useStep } from 'react-hooks-helper'

import Mass from '../Mass'
import Size from '../Size'
import Fill from '../Fill'

import './form.scss'

const steps = [
  { id: 'mass' },
  { id: 'size' },
  { id: 'fill' }
]

function Form (){

  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { navigation }

  switch(id){
    case 'mass':
      return <Mass {...props} />

    case 'size':
      return <Size {...props}/>

    case 'fill':
      return  <Fill {...props}/>

    default:
      return null
  }
}

export default Form
