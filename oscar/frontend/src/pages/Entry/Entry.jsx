import {Alert, Container, Spinner, Row, Col, InputGroup, Card, CarouselItem} from 'react-bootstrap';
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import './entry.css'

import axios from 'axios'

const Entry = () => {
    const { car_id_code } = useParams()
    var car_url = `/api/cars/${car_id_code}/?format=json`
    const [caritem, setCaritem] = useState(null);
    const [tmpartitem, setTmpartitem] = useState(null);
    const [isError, setIsError] = useState(false)

    function displayError() {
        if (isError) {
            return(
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                There does not seem to be a CAR with this id: {car_id_code}.<br/>
                API location: {car_url}
                <div className='text-center'>
                    <img className='oscar_img' src='/media/images/ice_bear.jpeg'/>
                </div>
            </Alert>
            )
        } else {
            return(
            <div className='d-flex justify-content-center'>
                <div className='' role="status">
                </div>
            </div>
            )
        }
    }

// Effects ---------------------
    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(car_url);
                setCaritem(request.data)
            } catch {
                console.log('error')
                setIsError(true)
            }
            return request;
        }
        fetchData(car_url);
    }, [car_url])

    useEffect(() => {
        if (caritem && !isError) {
            var tmpart_url = `/api/tmparts/${caritem.tmpart}/?format=json`
            async function fetchData() {
                try {
                    const request = await axios.get(tmpart_url);
                    setTmpartitem(request.data)
                } catch {
                    setIsError(true)
                }
                return request;
            }
            fetchData(tmpart_url);
        }
    }, [caritem])

// Render ---------------------
    function renderCar(caritem) {
        return (
            <div className='car'>
                <h3>Entry</h3>
                <hr/>
                <h4>CAR</h4>
                <Row>
                    <Col xs={2}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Name: {caritem.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">ID: {caritem.car_id}</Card.Subtitle>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Function</Card.Title>
                                <Card.Text>
                                    {caritem.car_functionality}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Created on: {caritem.created_on}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Last modified on: {caritem.last_update}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    function renderTmpart(tmpartitem) {
        return (
            <div className='tmpart'>
                <hr/>
                <h4>tmpart</h4>
                <Row>
                    <Col xs={2}>
                        <Card>
                            <Card.Body>
                                <Card.Title>ID: {tmpartitem.tmpart_id}</Card.Title>
                                <Card.Text>
                                    paper
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Function</Card.Title>
                                <Card.Text>
                                    {tmpartitem.function}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
            </div>
        )
    }

    return (
        <div className='Entry'>
            <Header/>
            <Container fluid className='body-container'>
                {caritem ? renderCar(caritem): displayError()}
                {tmpartitem ? renderTmpart(tmpartitem) : null}
            </Container>
        </div>
    );
}

export default Entry