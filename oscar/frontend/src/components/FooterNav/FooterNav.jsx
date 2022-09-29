import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';
import igem_logo from '../../assets/icons/igem-logo-dark-bavaria-trans-bg-small.png'

const FooterNav = () => {
    return (
        <div className='bg-light'> 
            <Container fluid>
                <Row class='row-cols-md-5 py-5 my-5 border-top mt-5'>
                    <Col>
                       <img src='../../assets/icons/igem-logo-dark-bavaria-trans-bg-small.png'/>
                    </Col>
                    <Col>
                        <h5>Section</h5>
                    </Col>
                    <Col>
                        <h5>Section</h5></Col>
                    <Col><h5>Section</h5></Col>
                    <Col><h5>Section</h5></Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterNav