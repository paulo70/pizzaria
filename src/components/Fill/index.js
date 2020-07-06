import React, { useState } from 'react'
import { Button, Form, Spinner, Col } from 'react-bootstrap'

function Fill ({ navigation }){

  const { previous, next }  = navigation
  const [ value, setValue ] = useState('catupiry')

  function handleValue(event){
    setValue(event.target.value)
  }

  return (
    <Form noValidate className='common-form'>
      <h1 className='common-form-title'>Escolher o recheio</h1>

      <Form.Row>
        <Col sm='4'>
          <Form.Control
            as='select'
            value = { value }
            onChange = { handleValue}
            >
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm='1'>
          <Button
            variant='success'
            onClick={previous}
            className='common-form-button'
            >
            Anterior
          </Button>
        </Col>
        <Col sm='3'>
          <Button
            variant='success'
            onClick={next}
            className='common-form-button'
            >
            Fechar o pedido
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Fill
