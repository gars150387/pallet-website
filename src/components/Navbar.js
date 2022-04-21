import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../img/logo.png';
import '../img/officalLogo.jpg';
import '../img/white-logo-transparent-background.png'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'



export const NavbarWebsite = () => {

    return (
        <div id="navbar" className="mb-2">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            </Navbar>
            <Navbar id="secondNavbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./"><h1>PALLET305</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="./about">
                                <h5>About </h5>
                            </Link>
                            <Link to="./design">
                                <h5 >Design </h5>
                            </Link>
                            <Link to="./contact">
                                <h5>Contact Us</h5>
                            </Link>
                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='icons' style={{fontSize: "35px"}} /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='icons' style={{fontSize: "40px"}}  /></Nav.Link>
                            <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='icons' style={{fontSize: "35px"}}  /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}