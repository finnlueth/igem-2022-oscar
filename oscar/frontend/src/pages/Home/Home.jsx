import React from 'react';
import {Alert, Container, Row, Col, InputGroup, Form} from 'react-bootstrap';

import SearchFied from '../../components/SearchField/SearchField'

import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';


const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <SearchFied/>
            <Footer/>
        </div>
    );
}

export default Home