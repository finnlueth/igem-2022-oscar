import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import {Alert, Container, Row, Col, InputGroup, Card} from 'react-bootstrap';



const Documentation = () => {
    return (
        <div className='Documentation'>
            <Header/>
            <Container fluid className='body-container'>
                <h3>Documentation</h3>
                <Card>
                    <Card.Body>
                        <Card.Title>CARs</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title>UI App</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title>API</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer/>
        </div>
    );
}

export default Documentation