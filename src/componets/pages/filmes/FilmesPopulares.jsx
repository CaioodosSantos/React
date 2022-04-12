import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import apiFilmes from '../../../services/apiFilmes'


const FilmesPopulares = () => {

    const [filmes, setfilmes] = useState([])

    useEffect(()=>{
        
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado=>{
            setfilmes(resultado.data.results)
    })
    
    
    },[])


  return (
    <div>
  <h1>Filmes Populares</h1>
  <h2>Os filmes mais populares que estão ou deram show de bilheteria</h2>
      
        <Row>
        {filmes.map(item => (
          <Col md={3} className='mb-3'>
            <Card style={{ height: '38rem', padding:'3px' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} />
              <Card.Body>
                        <Card.Title style={{padding:'10px'}} className='text-dark'>{item.title}</Card.Title>
                      
                      <Link className='btn btn-danger' to={"/componets/pages/filmes/" + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))} 
          
        </Row>
        
    </div>
  )
}

export default FilmesPopulares