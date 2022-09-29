import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';




const Documentation = () => {
    return (
        <div className='Documentation'>
            <Header/>
            <Container fluid>
                Doc Page
            </Container>
            <Footer/>
        </div>
    );
}

export default Documentation