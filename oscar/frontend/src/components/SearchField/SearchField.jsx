import React from 'react';
import {Alert, Container, Row, Col, InputGroup, Form, Button} from 'react-bootstrap';
import { TbSearch } from 'react-icons/tb';
import './searchfield.css'

const SearchField = () => {
    return (
        <Form className="d-flex">  
                <Form.Control type="search" placeholder="Find some CARs..." className="me-2" aria-label="Search"/>
                <Button variant="primary"><TbSearch/></Button>
        </Form>
    );
}

export default SearchField