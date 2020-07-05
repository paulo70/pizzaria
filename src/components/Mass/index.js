import React from 'react'
import {Button,Form, Spinner, Col } from 'react-bootstrap'

function Mass ({ navigation }){

  const { next } = navigation

  return (
    <Form noValidate className='common-form'>
      <h1 className='common-form-title'>Escolha a massa</h1>
      <Form.Row>
        <Col sm='3'>
          <Form.Control
            as='select'
            value = 'massa fina'
            >
          </Form.Control>
        </Col>
      </Form.Row>

      <Button
        onClick={next}
        variant = 'success'
        className='common-form-button'
        >
        Próximo
      </Button>
    </Form>
  )
}


export default Mass
