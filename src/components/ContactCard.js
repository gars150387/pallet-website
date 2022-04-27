import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { ImWhatsapp } from 'react-icons/im'


export const ContactCard = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Contact Info</Card.Title>
                    <Card.Text style={{ display: 'inline' }}>
                        <Row>
                            <Col>
                                <h3 style={{ color: "#212529" }}> +1 (786) 710-7291</h3>
                            </Col>
                            <Col>
                                <Button target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1" variant="success">
                                    <ImWhatsapp />
                                </Button>
                            </Col>
                        </Row>
                        <br/>
                    </Card.Text>
                    <Card.Text>
                        <h3 style={{ color: "#212529" }}>pallet305@yahoo.com</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
