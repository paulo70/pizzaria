import React, { useState, useEffect } from 'react'
import { Modal, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

import './promotion.scss'

function Promotion(props) {

  const URL = 'http://localhost:3001/recomend'

  const [ data, setData ]           = useState([])
  const [ showModal, setShowModal ] = useState(true)
  const [ showAlert, setShowAlert ] = useState(false)

  useEffect(() => {
    axios.get(URL)
      .then(resp => setData(resp.data) )
  },[])

  function handleCloseModal(){
    setShowModal(false)
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    },2000)
  }

  return (
    <div className='promotion'>
      <Alert
        className='promotion-alert'
        variant='success'
        show = { showAlert }
        data = { data }>

        Você acaba de ganhar { data.points } pontos!!
        Continue comprando e daremos o desconto!!!
      </Alert>
      <Modal show = { showModal } onHide = { handleCloseModal }>
        <Modal.Header closeButton>
          <Modal.Title>{ data.warning }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className='promotion-list' data = { data }>
            <li>{ data.name } </li>
            <li>Ingredientes: { data.ingredients }</li>
            <li>{ data.size }</li>
            <li><img src = { data.img } /></li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant = 'success' onClick = { handleCloseModal }>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Promotion
