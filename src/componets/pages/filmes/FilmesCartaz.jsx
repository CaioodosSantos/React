import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../../services/apiFilmes'

const FilmesCartaz = () => {

    const [filmes, setfilmes] = useState([])

    useEffect(()=>{
        
        apiFilmes.get('/movie/upcoming?language=pt-BR').then(resultado=>{
            setfilmes(resultado.data.results)
    })
    
    
    },[])


  return (
    <div>
  <h1>Filmes Cartaz</h1>
  <h2>Filmes que irão ser lançados em breve para você</h2>
      
        <Row>
        {filmes.map(item => (
          <Col md={3} className='mb-3'>
          <Card style={{ height: '38rem', padding:'3px' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} />
              <Card.Body>
                        <Card.Title style={{padding:'11px'}} className='text-dark'>{item.title}</Card.Title>
                      
                      <Link className='btn btn-danger' to={"/componets/pages/filmes/" + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))} 
          
        </Row>
        
    </div>
  )
}

export default FilmesCartaz