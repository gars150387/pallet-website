import React from 'react'
import { Card } from 'react-bootstrap'

import '../img/pergola/pergola (21).jpeg'
import '../img/reviews/Paradiseminipancakes.jpeg'


export const ReviewFormat = () => {
    return (
        <>
            <Card className="bg-dark text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/">
                <Card.Img src={require('../img/pergola/pergola (21).jpeg')} alt="pergola (21).jpeg" />
                <Card.ImgOverlay>
                    <Card.Title>Paradiseminipancakes</Card.Title>
                    <Card.Text>
                        <Card.Img src={require('../img/reviews/paradiseminipancakes.jpeg')} alt="paradiseminipancakes.jpeg" />
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}
