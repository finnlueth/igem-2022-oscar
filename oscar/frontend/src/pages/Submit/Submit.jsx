import React, { useState, useEffect } from 'react';

import {Alert, Button, Stack, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
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
                <Form>
                    <Form.Group className="mb-3" controlId="">
                        <h5>CAR</h5>
                        <Row>
                            <br/>
                            <Col>
                                <Form.Label>CAR Name</Form.Label>
                                <Form.Control type="text" placeholder="Name"/>
                                <Form.Text className="text-muted">
                                Enter you CAR's name here.
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>CAR Fuctionality</Form.Label>
                                <Form.Control type="text" placeholder="Functionality"/>
                                <Form.Text className="text-muted">
                                    Briefly describe your CAR's functionality here. Make sure to include important keywords.
                                </Form.Text>
                            </Col>
                        </Row>
                        <hr/>
                        <h5>Receptor</h5>
                        <Row>
                            <Col>
                                <Form.Label>Receptor Fuctionality</Form.Label>
                                <Form.Control type="text" placeholder="Functionality"/>
                                <Form.Text className="text-muted">
                                    Briefly describe your receptor's functionality here. Make sure to include important keywords.
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check type="switch" id="custom-switch" label="Needs Linker"/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Label>Receptor: Sequence Length</Form.Label>
                                <Form.Control type="text" placeholder="Length"/>
                                <Form.Text className="text-muted">
                                How long is you receptor's sequence?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Receptor: Sequence</Form.Label>
                                <Form.Control type="text" placeholder="Sequence"/>
                                <Form.Text className="text-muted">
                                Enter receptor's sequence here.
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Receptor: Sequence Annotation</Form.Label>
                                <Form.Control type="text" placeholder="Annotation"/>
                                <Form.Text className="text-muted">
                                Sequence annotation for your receptor.
                                </Form.Text>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Label>Receptor: Paper Title</Form.Label>
                                <Form.Control type="text" placeholder="Title"/>
                                <Form.Text className="text-muted">
                                What is the title of the paper?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Receptor: Paper DOI</Form.Label>
                                <Form.Control type="text" placeholder="DOI"/>
                                <Form.Text className="text-muted">
                                What is the DOI of the paper?
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Receptor: Paper Journal</Form.Label>
                                <Form.Control type="text" placeholder="Journal"/>
                                <Form.Text className="text-muted">
                                What journal was the paper published in?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Receptor: Paper Authors</Form.Label>
                                <Form.Control type="text" placeholder="Authors"/>
                                <Form.Text className="text-muted">
                                Who are the authors of your paper?
                                </Form.Text>
                            </Col>
                        </Row>
                        <hr/>
                        <h5>Linker</h5>
                        <Row>
                            <Col>
                                <Form.Label>Linker: Sequence Length</Form.Label>
                                <Form.Control type="text" placeholder="Length"/>
                                <Form.Text className="text-muted">
                                How long is you receptor's sequence?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Linker: Sequence</Form.Label>
                                <Form.Control type="text" placeholder="Sequence"/>
                                <Form.Text className="text-muted">
                                Enter receptor's sequence here.
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Linker: Sequence Annotation</Form.Label>
                                <Form.Control type="text" placeholder="Annotation"/>
                                <Form.Text className="text-muted">
                                Sequence annotation for your receptor.
                                </Form.Text>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Label>Linker: Paper Title</Form.Label>
                                <Form.Control type="text" placeholder="Title"/>
                                <Form.Text className="text-muted">
                                What is the title of the paper?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Linker: Paper DOI</Form.Label>
                                <Form.Control type="text" placeholder="DOI"/>
                                <Form.Text className="text-muted">
                                What is the DOI of the paper?
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Linker: Paper Journal</Form.Label>
                                <Form.Control type="text" placeholder="Journal"/>
                                <Form.Text className="text-muted">
                                What journal was the paper published in?
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Label>Linker: Paper Authors</Form.Label>
                                <Form.Control type="text" placeholder="Authors"/>
                                <Form.Text className="text-muted">
                                Who are the authors of your paper?
                                </Form.Text>
                            </Col>
                        </Row>
                        <hr/>
                    </Form.Group> 
                </Form>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="primary">Save changes</Button>
                </Stack>
            </Container>
            <br/>
            <Footer/>
        </div>
    );
}

export default Submit