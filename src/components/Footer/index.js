import React from 'react'

import './footer.scss'

function Footer(props){

  const contact = [
    'Tel:(11) 9999-9999',
    'Endereço: Rua Bartira',
    'Bairro: Perdizes - SP',
    'Número: 1100',
    'Todos os direitos reservados'
  ]

  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='footer'>
          <ul className='footer-contacts'>
            {contact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
