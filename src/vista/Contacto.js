import React from "react";
import { ContactForm } from "../components/ContactForm";

import { Container, Row, Col } from "react-bootstrap";

import '../style/contact.css'

export const Contacto = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className="mt-2" xs={7}><h3 id="contact-title">Para preguntas y/o cotizaciones, contactanos a traves de este formulario</h3></Col>
                <Col></Col>
            </Row>
            <Row fluid="md">
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container >
    )
}