import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import {Alert, Container, Row, Col, InputGroup, Card} from 'react-bootstrap';

const About = () => {
    return (
        <div className='About'>
            <Header/>
            <Container fluid className='body-container'>
                <h3>About</h3>
                <Card>
                    <Card.Body>
                        <Card.Title>About Oscar</Card.Title>
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
                        <Card.Title>The underlying Technology</Card.Title>
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
                        <Card.Title>About Specificar</Card.Title>
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
                        <Card.Title>About iGEM Munich</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Check out our website!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer/>
        </div>
    );
}

export default About