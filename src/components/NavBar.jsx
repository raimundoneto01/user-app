import React from 'react'

import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import App from '../App';
import { Cadastrar } from '../Pages/Cadastrar';



export const NavBar = () => {
    return (
        <div>

            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">UserApp</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav.Link as={Link} to='/'>Página Inicial</Nav.Link>
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/cadastrar'>Cadastro</Nav.Link>
                    <Nav.Link as={Link} to='/usuario'>Usuário</Nav.Link>
                    <Nav.Link as={Link} to='/contato'>Contato</Nav.Link>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                           <Link to={'/login'}>Sair</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Nav className="bg-body-tertiary">
                <Nav.Link as={Link} to='/'>Página Inicial</Nav.Link>
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/cadastrar'>Cadastro</Nav.Link>
                <Nav.Link as={Link} to='/usuario'>Usuário</Nav.Link>
                <Nav.Link as={Link} to='/contato'>Contato</Nav.Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Nav> */}

        </div>
    )
}
