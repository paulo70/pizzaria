import React from 'react'
import { Button, Form } from 'react-bootstrap'

import './order.scss'

function Order( navigation ){
  const { previous, next } = navigation;

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <Form onSubmit className='common-form'>
      <div className='order'>
        <h1 className='order-title'>Obrigado por comprar com a gente !!!</h1>
        <h3 className='orde-subtitle'>Seu pedido está sendo processado em breve sera entregue</h3>
      </div>
    </Form>
  )
}

export default Order
