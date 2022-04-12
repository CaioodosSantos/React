import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cartao = (props) => {
  return (
    <div className='mb-5'>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagem} />
            <Card.Body>
                <Card.Title>{props.titulo}Card Title</Card.Title>
                    <Card.Text className='text-dark'>
                        Card 02.
                    </Card.Text>
                    <Button variant="primary">Go link</Button>
            </Card.Body>
        </Card>
  
    </div>
  )
}

export default Cartao