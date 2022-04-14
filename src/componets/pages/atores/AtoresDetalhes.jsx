import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../../services/apiFilmes'

const AtoresDetalhes = () => {

  const params = useParams() 

  const [ator, setAtor] = useState({})

  useEffect(()=>{
        
    apiFilmes.get('/person/' + params.id + '?language=pt-BR').then(resultado=>{
        setAtor(resultado.data)
})
},[])
  return (
    <div>
    
        {!ator.id && <h1>Carregando... Aguarde!</h1>}

        {ator.id &&
    <div>
        <h1>{ator.title}</h1>

        
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.poster_path} />
                </Card>
            </Col>
           
                    </div>
        }
        </div>
  )
}

export default AtoresDetalhes