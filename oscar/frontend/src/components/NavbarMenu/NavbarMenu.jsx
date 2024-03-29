import React from 'react';
import {Nav, Navbar, NavDropdown, Form, Button, Container, Row, Col} from 'react-bootstrap';
import SearchField from '../SearchField/SearchField';

import './navbarmenu.css'
// import Logo from '/media/icons/oscar_bear.png'

const NavbarMenu = () => {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div id='stickytypeheader'>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={'/media/icons/oscar-bear-grey.svg'} alt='logo' height="52"/>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '75px' }} navbarScroll>
                            <Nav.Link href="/browse">Browse</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            {/* <Nav.Link href="/changes">Changes</Nav.Link> */}
                            {/* {% static 'css/site.css' %} */}
                            <Nav.Link href="/documentation">Documentation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <SearchField/>
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