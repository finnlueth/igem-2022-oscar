import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col, CloseButton} from 'react-bootstrap';
import { TbSearch } from 'react-icons/tb';

const Toolbar  = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav variant="pills" defaultActiveKey="db">
                    <Nav.Item>
                        <Nav.Link eventKey="db">DB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="ide">IDE</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav variant="pills" className="justify-content-end" defaultActiveKey="sign-up">
                    <Nav.Item>
                        <Nav.Link eventKey="log-in">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="sign-up">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Toolbar