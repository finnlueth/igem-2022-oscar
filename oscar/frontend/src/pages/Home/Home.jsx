import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import SearchFied from '../../components/SearchField/SearchField'
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import Splash from '../../components/Splash/Splash';

import styles from './home.css'


const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <Container fluid className='body-container d-flex align-items-center justify-content-center'>
                <Row className='home-searchfield'>
                    <Splash/>
                    <SearchFied/>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home