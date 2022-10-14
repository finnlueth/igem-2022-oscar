import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';
import styles from './footernav.css'

const FooterNav = () => {
    return (
        <div className='bg-light footer-container'> 
            <Container fluid>
                <Row className='align-items-center'>
                    <Col>
                       <img src={'/media/icons/igem-logo-dark-bavaria.svg'} height="100"/>
                    </Col>
                    <Col>
                        <h5>OSCAR</h5>
                        <a href='/browse' className="link-secondary">Browse</a><br/>
                        <a href='/about' className="link-secondary">About</a><br/>
                        <a href='/documentation' className="link-secondary">Documentation</a><br/>
                        <a href='/submit' className="link-secondary">Submit</a><br/>
                    </Col>
                    <Col>
                        <h5>iGEM Munich</h5>
                        <a href='http://igemmunich.mwn.de/' className="link-secondary">Homepage</a><br/>
                        <a href='http://igemmunich.mwn.de/' className="link-secondary">About</a><br/>
                        <a href='http://igemmunich.mwn.de/index.php/sponsoring.html' className="link-secondary">Sponsoring</a><br/>
                        <a href='http://igemmunich.mwn.de/index.php/contact.html' className="link-secondary">Contact</a><br/>
                    </Col>
                    <Col>
                        <h5>SpecifiCAR</h5>
                        <a href='/browse' className="link-secondary">Wiki</a><br/>
                        <a href='/about' className="link-secondary">About</a><br/>
                        <a href='/documentation' className="link-secondary">Project</a><br/>
                        <a href='/submit' className="link-secondary">Other</a><br/>
                    </Col>
                    <Col>
                        <h5>iGEM</h5>
                        <a href='/browse' className="link-secondary">Homepage</a><br/>
                        <a href='/about' className="link-secondary">About</a><br/>
                        <a href='/about' className="link-secondary">Competition</a><br/>
                        <a href='/about' className="link-secondary">Jamboree</a><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterNav