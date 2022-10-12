import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';
import igem_logo from '../../../media/icons/igem-logo-dark-bavaria-trans-bg-small.png'

const FooterNav = () => {
    return (
        <div className='bg-light'> 
            <Container fluid>
                <Row>
                    <Col>
                       <img src={igem_logo}/>
                    </Col>
                    <Col>
                        <h5>OSCAR</h5>
                    </Col>
                    <Col>
                        <h5>iGEM Munich</h5>
                    </Col>
                    <Col>
                        <h5>Specificar</h5>
                    </Col>
                    <Col>
                        <h5>iGEM</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterNav