import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner, Col } from 'react-bootstrap'

import axios from 'axios'

function Fill ({ navigation }){

  const URL = 'http://localhost:3001/fill'

  const { previous, next   }   = navigation
  const [ value, setValue  ]   = useState('')
  const [ data,  setData   ]   = useState([])

  function handleValue(event){
    setValue(event.target.value)
  }

  useEffect(() => {
    axios.get(URL)
      .then(resp =>  setData(resp.data))
  },[])


  return (
    <Form noValidate className='common-form'>
      <h1 className='common-form-title'>Escolher o recheio</h1>

      <Form.Row>
        <Col sm='4'>
          <Form.Control
            as        ='select'
            value     = { value }
            onChange  = { handleValue }
            data      = { data }
            >
            { data.map((item, index) => (
              <option key = {index} value = { item.fill }> {item.description_fill}</option>
            )) }
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm='1'>
          <Button
            variant   ='success'
            onClick   ={ previous }
            className ='common-form-button'
            >
            Anterior
          </Button>
        </Col>
        <Col sm='3'>
          <Button
            variant   ='success'
            onClick   = { next }
            className ='common-form-button'
            >
            Fechar o pedido
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Fill
