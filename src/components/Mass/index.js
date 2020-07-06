import React, { useState, useEffect } from 'react'
import {Button,Form, Spinner, Col, Alert } from 'react-bootstrap'
import axios from 'axios'

import Promo from '../Promotion'

function Mass ({ navigation }){
  const URL = 'http://localhost:3001/mass'

  const { next } = navigation
  const [ value, setValue ] = useState('')
  const [ data , setData  ] = useState([])

  function handleValue (event){
    setValue(event.target.value)
  }

  useEffect(() => {
    axios.get(URL)
      .then(resp => setData(resp.data))
  },[])

  return (
    <>
    <Col>
      <Form noValidate className='common-form'>
        <h1 className='common-form-title'>Escolha a massa</h1>
        <Form.Row>
          <Col sm='3'>
            <Form.Control
              as ='select'
              value = { value }
              onChange = { handleValue }
              data = { data }
              >
              {data.map((item, index) => (
                <option key = {index} value = {item.mass}>{item.description_mass}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Row>

        <Button
          onClick={next}
          variant = 'success'
          className='common-form-button'
          >
          Avançar
        </Button>
      </Form>
    </Col>
    <Promo/>
    </>
  )
}


export default Mass
