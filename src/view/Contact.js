import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";


import '../style/contact.css'

export const Contact = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
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