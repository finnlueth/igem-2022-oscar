import React, { useState, useEffect } from 'react';

import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';

import axios from 'axios'

const Submit = () => {
    var url = '/api/cars/?format=json'
    const [caritem, setCaritem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCaritem(response.data[0]);
            })
        },[])

    let content = null

    if (caritem) {
        content = <div>{caritem.name}</div>
    }
    
    return (
        <div className='Submit'>
            <Header/>
            <Container fluid className='body-container'>
                <h3>Submit</h3>
                
            </Container>
            <Footer/>
        </div>
    );
}

export default Submit