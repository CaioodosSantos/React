import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div className='mb-5'>

    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>MENUS</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/carros">Carros</Link>
            <Link className='nav-link' to="/array">Array</Link>
            <Link className='nav-link' to="/objeto">Objeto</Link>
            <Link className='nav-link' to="/contador">Contador</Link>
            <Link className='nav-link' to="/componets/pages/filmes/FilmesPopulares">Populares</Link>
            <Link className='nav-link' to="/componets/pages/filmes/FilmesLancamentos">lançamentos</Link>
            <Link className='nav-link' to="/componets/pages/filmes/FilmesCartaz">cartaz</Link>



          </Nav>
      </Container>
    </Navbar>

    </div>
  )
}

export default Menu