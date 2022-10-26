import {Alert, Container, Spinner, Row, Col, InputGroup, Form, ListGroup} from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import axios from 'axios'

import styles from './browse.css'

const Browse = () => {
    var url = '/api/cars/?format=json'
    const [caritem, setCaritem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCaritem(response.data);
            })
        },[])

    let content = null

    if (caritem) {
        content =
            <ListGroup className='position-static'>
            <ListGroup.Item className='position-static'>
            <Row>
                <Col xs={1}><b>ID</b></Col>
                <Col><b>Name</b></Col>
                <Col xs={4}><b>Description</b></Col>
                <Col><b>Created</b></Col>
            </Row>
            </ListGroup.Item>
                {caritem.map(caritem =>
                    <ListGroup.Item key={`${caritem.car_id}`} action href={`/db/${caritem.car_id}`}>
                    <Row>
                        <Col xs={1}>{caritem.car_id}</Col>
                        <Col>{caritem.name}</Col>
                        <Col xs={4} className='overflow-ellipsis'>{caritem.car_functionality}</Col>
                        <Col>{caritem.created_on}</Col>
                    </Row>
                    </ListGroup.Item>
                )}
            </ListGroup>
    } else {
        content =
        <div className="text-center">
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    return (
        <div className='Browse '>
            <Header/>
            <Container fluid className='position-static body-container'>
                <h3>Browse</h3>
                {content}
            </Container>
            <br/>
            <Footer/>
        </div>
    );
}

export default Browse