import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';




const Browse = () => {
    return (
        <div className='Browse'>
            <Header/>
            <Container fluid>
                Browse Page
            </Container>
            <Footer/>
        </div>
    );
}

export default Browse