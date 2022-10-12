import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

const Changes = () => {
    return (
        <div className='Changes'>
            <Header/>
            <Container fluid className='body-container'>
            Changes Page
            </Container>
            <Footer/>
        </div>
    );
}

export default Changes