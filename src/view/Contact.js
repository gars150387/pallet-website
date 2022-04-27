import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";


import '../style/contact.css'

export const Contact = () => {
    return (
        <Container>
            <Row>
                <Col xs lg={6}>
                    <Row>
                        <Col className="text-center">
                            <h3 id="contact-title">Free quotation and questions <br /> Please contact us.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ContactForm />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

/*
                

                
*/