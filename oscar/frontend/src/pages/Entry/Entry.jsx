import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import { useParams } from "react-router-dom";

import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

const Entry = () => {
    const { car_id_code } = useParams()

    return (
        <div className='Entry'>
            <Header/>
            <Container fluid>
                <h3>{car_id_code}</h3>
                Entry Page <br/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Entry