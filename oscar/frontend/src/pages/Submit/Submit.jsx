import React from 'react';

import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';


const Submit = () => {
    return (
        <div className='Submit'>
            <Header/>
            <Container fluid>
                Submit
            </Container>
            <Footer/>
        </div>
    );
}

export default Submit