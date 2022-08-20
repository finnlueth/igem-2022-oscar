import React from 'react';
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';
import { TbSearch } from 'react-icons/tb';
// import Image from '../../assets/images/oscar.png'
import './navbarmenu.css'


const NavbarMenu = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div id='stickytypeheader'>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#">aaa</Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="">Browse</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="">Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Find some CARs..." className="me-2" aria-label="Search"/>
                        <Button variant="primary"><TbSearch/></Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavbarMenu


$(function(){
    var stickyHeaderTop = $('#stickytypeheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickytypeheader').css({position: 'fixed', top: '0px'});
                    $('#sticky').css('display', 'block');
            } else {
                    $('#stickytypeheader').css({position: 'static', top: '0px'});
                    $('#sticky').css('display', 'none');
            }
    });
});