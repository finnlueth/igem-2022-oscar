import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import SearchFied from '../../components/SearchField/SearchField'
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import Splash from '../../components/Splash/Splash';


const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <Container fluid>
                Test123 <br/>
                <Splash/>
                <SearchFied/>
                <Row>
                    <div>
                        OSCAR: Open Source Chimeric Antigen Receptors in 2022
                    </div>
                    <div>
                        Names etc.
                    </div>
                    <div>
                        Short About
                    </div>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home