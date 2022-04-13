import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../../services/apiFilmes'

const FilmesDetalhes = () => {

    const params = useParams() 

    const [filme, setfilmes] = useState([])

    useEffect(()=>{
        
        apiFilmes.get('/movie/' + params.id + '?language=pt-BR').then(resultado=>{
            setfilmes(resultado.data)
    })
    
    
    },[])
    


  return (
    <div>
            
            <h1 style={{padding: '30px'}}>{filme.title}</h1>

            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><strong className='text-primary'>Título Original: </strong>{filme.original_title}</p>
                    <p><strong className='text-primary'>Popularidade: </strong>{filme.popularity}</p>
                    <p><strong className='text-primary'>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p><strong className='text-primary'>Orçamento: </strong>{filme.budget}</p>
                    <p><strong className='text-primary'>Sinopse: </strong>{filme.overview}</p>
                
                    <Link className='btn btn-primary' to={-1}>voltar</Link>

                </Col>
                
            </Row>

        </div>
  )
}

export default FilmesDetalhes