import React, { useState } from 'react'
import {Button,Form, Spinner, Col } from 'react-bootstrap'

import Options from './options'

function Mass ({ navigation }){

  const { next } = navigation
  const [value, setValue] = useState('caseira')

  function handleValue (event){
    setValue(event.target.value)
  }

  return (
    <Form noValidate className='common-form'>
      <h1 className='common-form-title'>Escolha a massa</h1>
      <Form.Row>
        <Col sm='3'>
          <Form.Control
            as ='select'
            value = { value }
            onChange = { handleValue }
            >
            <Options />
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
