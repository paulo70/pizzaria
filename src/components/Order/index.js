import React from 'react'
import { Button } from 'react-bootstrap'

import './order.scss'

function Order( navigation ){
  const { next } = navigation

  return (
    <div className='order'>
      <h1 className='order-title'>Obrigado por comprar com a gente !!!</h1>
      <h3 className='orde-subtitle'>Seu pedido está sendo processado em breve sera entregue</h3>
      <Button
            variant ='success'
            onClick ={ next }
            className='common-form-button'
            >
            Finalizar pedido
          </Button>
    </div>
  )
}

export default Order
