import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner, Col } from 'react-bootstrap'

import axios from 'axios'

function Size({ navigation }){

  const URL = 'http://localhost:3001/size'

  const { previous, next  }  = navigation
  const [ value, setValue ]  = useState('')
  const [ data, setData   ]  = useState([])

  function handleValue(event){
    setValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  useEffect(() => {
    axios.get(URL)
      .then(resp => setData(resp.data))
  },[])

  return (
    <Form onSubmit = {handleSubmit} noValidate className='common-form'>
      <h1 className='common-form-title'>Escolha o tamanho</h1>

      <Form.Row>
        <Col sm='3'>
          <Form.Control
            as        ='select'
            value     = { value }
            onChange  = { handleValue }
            data      = { data }
            >
            {data.map((item, index) => (
              <option key = {index} value = {item.size}> {item.description_size} </option>
            ))}
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm='1'>
          <Button
            variant  ='success'
            onClick  ={previous}
            className='common-form-button'
            >
            Anterior
          </Button>
        </Col>

        <Col sm='1'>
          <Button
            type    = 'submit'
            variant ='success'
            onClick ={ next }
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
