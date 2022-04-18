import React from 'react';
import { Card, Col } from 'react-bootstrap';

import "../style/design.css";

export const DesignTemplate = ({ img }) => {
    return (
        <Col xs lg={12} className="m-2 justify-content-center animate__animated animate__fadeInDownBig" id="template">
            <Col className="m-1 justify-content-center animate__animated animate__fadeInRightBig" id="template">
                <Card.Img className="justify-content-center" src={require(`../img/${img}.jpg`)} alt={img} id="designImg" />
            </Col>
        </Col>
    )
}
