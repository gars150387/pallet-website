import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im';
import { SiTiktok } from 'react-icons/si'
import { Row } from "react-bootstrap";
import '../img/iran/logo/white-logo-transparent-background.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'



export const NavbarWebsite = () => {

    return (
        <div id="navbar" className="mb-2">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" fluid>
                <Container>
                    <Link to='./'>
                        <Row sm={1} variant="start" >
                            <img src={require('../img/iran/logo/white-logo-transparent-background.png')}
                                alt='logo'
                                id='logo'
                            />
                        </Row>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="./">
                                <Nav.Link href="./">Home</Nav.Link>
                            </Link>
                            <Link to="./about">
                                <Nav.Link href="./about">About </Nav.Link>
                            </Link>
                            <Link to="./design">
                                <Nav.Link href="./design" >Projects </Nav.Link>
                            </Link>
                            <Link to="./contact">
                                <Nav.Link href="./contact">Contact Us</Nav.Link>
                            </Link>
                            <Link to="./customer">
                                <Nav.Link href="./customer">Our Customers</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' style={{ fontSize: "35px" }} /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' style={{ fontSize: "40px" }} /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pallet305?lang=en"><SiTiktok id='icons' style={{ fontSize: "35px" }} /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' style={{ fontSize: "35px" }} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}