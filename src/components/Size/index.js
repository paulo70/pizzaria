import React from 'react'
import { Button, Form, Spinner, Col } from 'react-bootstrap'

function Size({ navigation }){

  const { previous, next } = navigation

  return (
    <Form noValidate className='common-form'>
      <h1 className='common-form-title'>Escolha o tamanho</h1>

      <Form.Row>
        <Col sm='3'>
          <Form.Control
            as='select'
            value = 'familia'
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

        <Col sm='1'>
          <Button
            variant='success'
            onClick={next}
            className='common-form-button'
            >
            Próximo
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Size
