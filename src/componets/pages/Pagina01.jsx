import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Cartao from '../Cartao'

const Pagina01 = () => {
  return (
<div>
<Container>
  <Card body className='text-dark' >Card 01.</Card>

        <box cor="warning" title="Atenção">
            <p>atenção isto é apenas um teste</p>
        </box>

    <Cartao imagem="https://blog.vilourenco.com.br/wp-content/uploads/2018/06/react-banner.jpeg"/>

    <Cartao imagem="https://miro.medium.com/max/1050/1*Fxa6oJFh2lRD7EnAcZIcQg.png"/>

    <Card body className='text-dark'>Card 01.</Card>

    <Card body className='text-dark'>Card 03.</Card>

        <h1>Hello world</h1>
          
        <div>
        <ul>
            <li><a href="https://www.samsung.com/br/">Página 01</a></li>
            <li><a href="https://www.apple.com/br/">Página 02</a></li>
            <li><a href="https://www.mibrasil.com.br/">Página 03</a></li>
        </ul>
        </div>

          <Button variant="primary">BEM-VINDO</Button>{' '}
</Container>
</div>
  )
}

export default Pagina01