import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';

const FooterNav = () => {
    return (
        <div className='bg-light'> 
            <Container fluid>
                <Row class='row-cols-md-5 py-5 my-5 border-top mt-5'>
                    <Col>
                        <img src='http://igemmunich.mwn.de/images/design_2022/igem-logo-dark-bavaria.png' height='96'/>
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