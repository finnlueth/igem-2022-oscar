import React,  { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import {Alert, Container, Row, Col, InputGroup, Form, Button} from 'react-bootstrap';
import SearchFied from '../../components/SearchField/SearchField';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import Splash from '../../components/Splash/Splash';

import styles from './home.css'
import axios from 'axios'

const Home = () => {
    var url = '/api/cars/?format=json'
    const [caritem, setCaritem] = useState(null);

    const getData = async () => {
        const response = await axios.get(
            url
        );
        return(response.data)
    };

    return (
        <div className='Home'>
            <Header/>
            <Container fluid className='body-container d-flex align-items-center justify-content-center'>
                <Row className='home-searchfield text-center'>
                    <Splash/>
                    <SearchFied/>
                    <div>
                        <br/>
                        <Button className='lucky' variant="primary" href={`/db/${7}`}>I'm Feeling Lucky</Button>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home