import React from "react";
import { Link } from "react-router-dom";
import { Col, Navbar, Container } from 'react-bootstrap'
import '../img/white-logo-transparent-background.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'


export const Header = () => {
    return (
        <Container className="sticky-top" id="headerContainer" fluid>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Col md={{ span: 8, offset: 4 }} className="justify-content-center">
                            <Link to="/">
                                <img src={require('../img/white-logo-transparent-background.png')}
                                    alt='logo'
                                    id='logo'
                                />
                            </Link>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    )
}

