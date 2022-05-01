import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ScrollUp } from '../components/ScrollUp';

import '../style/about.css';

import '../img/iran/iran/iran (1).jpg'
import '../img/iran/magazine/magazine (6).jpg'
import '../img/iran/magazine/magazine (5).jpg'

export const About = () => {
    return (
        <Container className='aboutContainer'>
                  <ScrollUp/>
            <Row clasName='row-about-text'>
                <Col md={7} className='text-about'>
                    <h4>
                        Pallet305 is a company that was born in 2019, it specializes in creating, designing and modifying outdoor furniture, our product is exported from Spain, which is certified and treated.
                    </h4>
                    <br/>
                    {/* <h4 >
                        Some of our most demanded jobs for patios are sofas, coffee tables, planters, bars, loungers, mailboxes and much more variety. For interiors, custom beds, sliding doors, etc.
                    </h4> */}
                    <h4 >
                        We build pergolas and wooden floors (PT) to everyone's taste and satisfaction.
                        Our priority is the customer, we are proud to be able to provide the best service and quality with our products.
                    </h4>
                    <Link to="/design">
                        <h4 className='animate__animated animate__pulse animate__infinite animate__slower' style={{ color: 'white', textDecoration: 'underline'}}>
                            ... view our work here
                        </h4>
                    </Link>
                </Col>
                <Col className="col-imag-about">
                    <Card.Img id='imgAbout' variant="" src={require("../img/iran/iran/iran (1).jpg")} style={{ paddingTop: "15px" }} />
                </Col>
            </Row>
            <Row>
                <Col >
                    <Card.Img id='magazine' src={require('../img/iran/magazine/magazine (6).jpg')} alt='../img/iran/magazine/magazine (6).jpg' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Img id='magazine' src={require("../img/iran/magazine/magazine (5).jpg")} alt='PHOTO-2022-03-24-15-34-13' />
                </Col>
            </Row>

        </Container>
    )
}