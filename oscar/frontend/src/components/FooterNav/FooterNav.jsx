import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';

const FooterNav = () => {
    return (
        <Container fluid>
            <Row class='row-cols-md-5 py-5 my-5 border-top'>
                <Col>
                    <h5>Section</h5>
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
    );
}

export default FooterNav