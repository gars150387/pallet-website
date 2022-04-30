import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { GiClick } from 'react-icons/gi'

import '../style/customer.css'

export const ReviewTemplate = ({ id, image, text, owner, link }) => {
    return (
        <>
            <Card id='review-template' style={{ float: 'left'}} key={id}>
                <Card.Img variant="top" src={require(`../img/reviews/${image}.jpg`)} alt={image} id="review-img"/>
                <Card.Body style={{ backgroundColor: '#212529', color: 'white' }}>
                    <Card.Title>{owner}</Card.Title>
                    <Card.Text>
                        "{text}"
                    </Card.Text>
                    <Button variant="success" target="_blank" rel="noopener noreferrer" href={link}>
                        <GiClick className=' animate__animated animate__flash animate__infinite animate__slower' />
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
