import React from 'react'

import { Nav } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

import App from '../App';
import { Cadastrar } from '../Pages/Cadastrar';



export const NavBar = () => {
  return (
    <div>
        
        
            <Nav>
                <Nav.Link as={Link} to='/'>Página Inicial</Nav.Link>
                <Nav.Link as={Link} to='/cadastrar'>Cadastro</Nav.Link>
                <Nav.Link as={Link} to='/usuario'>Usuário</Nav.Link>
                <Nav.Link as={Link} to='/contato'>Contato</Nav.Link>
            </Nav>
           
    </div>
  )
}
