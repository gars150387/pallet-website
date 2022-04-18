import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../style/about.css';

import '../img/37d5499f-af1e-46ca-a14a-892a230d5aa0.jpg'
import '../img/PHOTO-2022-03-24-15-26-15.jpg'
import '../img/PHOTO-2022-03-24-15-24-55.jpg'

export const Nosotros = () => {
    return (
        <Container className='aboutContainer'>
            <Row>
                <Col md={4} className='text-about'>
                    <h4 >
                        Pallet305 es una compania que nacio en 2019, se especializa en crear, disenar y modificar muebles, nuestro producto es exportado desde Espana, el cual esta certificado y tratado.
                    </h4>
                    <br />
                    <h4 >
                        Algunos de nuestros trabajos mas solicitados para patios son sofas, mesas de cafe, materos, bars, loungers, caja para el correo y muchos mas. Para interiores, camas personalizadas, puertas correrizas, etc.
                    </h4>
                    <br />
                    <h4 >
                        Tambien, construimos pergolas y pisos de madera (PT) para cualquier tipo de gusto y preferencia.
                        Nuestra prioridad es el cliente siempre. Estamos orgullos de poder proveer un servicio de calidad con nuestros productos.
                    </h4>
                </Col>
                <Col id='imgAbout'>
                    <Card.Img variant="" src={require("../img/37d5499f-af1e-46ca-a14a-892a230d5aa0.jpg")} style={{ paddingTop: "22px" }} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col >
                    <Card.Img id='magazine' src={require('../img/PHOTO-2022-03-24-15-26-15.jpg')} alt='PHOTO-2022-03-24-15-34-37' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Img id='magazine' src={require("../img/PHOTO-2022-03-24-15-24-55.jpg")} alt='PHOTO-2022-03-24-15-34-13' />
                </Col>
            </Row>
        
        </Container>
    )
}