import {Alert, Container, Spinner, Row, Col, InputGroup, Card, CarouselItem} from 'react-bootstrap';
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import axios from 'axios'

const Entry = () => {
    const { car_id_code } = useParams()

    var car_url = `/api/cars/${car_id_code}/?format=json`
    const [caritem, setCaritem] = useState(null)
    useEffect(() => {
        axios.get(car_url)
            .then(response => {
                setCaritem(response.data);
            })
        },[]
    )

    setTimeout(function(){
        if (caritem.tmpart_id) {
            var tmpart_url = `/api/tmparts/${caritem.tmpart_id}/?format=json`
            const [tmpartitem, tseTmpartitem] = useState(null)
            useEffect(() => {
                axios.get(tmpart_url)
                    .then(response => {
                        setCaritem(response.data);
                    })
                },[]
            )
        }
    }, 1000);

// ----------------------------------------------------------------
    let content = null
    function displayError() {
        return(
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                There does not seem to be a CAR with this id: {car_id_code}.<br/>
                API location: {car_url}
            </Alert>
        )
    }

    if (caritem) {
        content =
            <div className='entry'>
                <h3>Entry</h3>
                <hr/>
                <h4>CAR</h4>
                <Card>
                    <Card.Body>
                        <Card.Title>{caritem.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">ID: {caritem.car_id}</Card.Subtitle>
                        <Card.Text>
                            Description: {caritem.car_functionality}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Row>
                <Col><Card><Card.Text><Card.Body>
                                    Created on: {caritem.created_on}
                </Card.Body></Card.Text></Card></Col>
                <Col><Card><Card.Text><Card.Body>
                                    Last modified on: {caritem.last_update}
                </Card.Body></Card.Text></Card></Col>
                </Row>
                <hr/>
                {/* <tmpart_content/> */}
            </div>
    } else {
        setTimeout(console.log('Hiii'), 3000);
        content = displayError()
    }

    // let tmpart_content = null
    // if (tmpartitem) {
    //     <div>hiii</div>
    // }   

    return (
        <div className='Entry'>
            <Header/>
            <Container fluid className='body-container'>
                {content}
            </Container>
            <Footer/>
        </div>
    );
}

export default Entry