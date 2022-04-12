import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'


const Objeto = (props) => {
  
  const carros = [
    {marca:'mazda', modelo:'Rx-7', motor:'13B-rew',foto:'https://i.pinimg.com/originals/0c/a7/fa/0ca7fa32ac1983a64b7844baa5d14573.jpg'},
    {marca:'toyota', modelo:'supra', motor:'2JZ',foto:'https://carrorac.com/newimage/small/1993-supra-iv-a8-toyota.jpg'},
    {marca:'nissan', modelo:'skyline', motor:'RB26DETT',foto:'https://http2.mlstatic.com/D_NQ_NP_881325-MLB44594719687_012021-O.jpg'},
    {marca:'nissan', modelo:'350z', motor:'V6',foto:'https://www.revistafullpower.com.br/wp-content/uploads/2017/12/nissa-350z-tokyo-drift-1.jpg'}
  ]
  
  return (
    <div>
      
      <h1>Objeto</h1>

      <h2>Carros</h2>
      
      <Row>
        {carros.map(item => (
            <Col md={3}>
              <Card>
                  <Card.Img style={{ height: '19rem' }} variant="top" src={item.foto} />
                <Card.Body>
                        <Card.Title><h1>{item.marca}</h1></Card.Title>
                          <Card.Text className='text-dark'>
                            <strong>modelo: </strong>{item.modelo}
                          </Card.Text>
                          <Card.Text className='text-dark'>
                            <strong>motor: </strong>{item.motor}
                          </Card.Text>
                    <Button variant="danger">Mais detalhes</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>                      
    </div>
  )
}

export default Objeto