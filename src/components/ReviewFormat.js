import React from 'react'
import { Card } from 'react-bootstrap'
import { GiClick } from 'react-icons/gi'

import '../img/pergola/pergola (21).jpeg'
import '../img/reviews/paradiseminipancake.jpg'

//src\img\reviews\paradiseminipancake.jpg


export const ReviewFormat = () => {
    return (
        <>
            <Card className="bg-dark text-white mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/">
                    <Card.Img src={require('../img/pergola/pergola (21).jpeg')} alt="pergola (21).jpeg" />
                    <Card.ImgOverlay>
                        <Card.Title>
                            <Card.Img style={{ width: '50%', height: '15%', margin: 'auto', position: 'absolute', bottom: '15%', left: '5%', cursor: 'pointer' }} src={require('../img/reviews/paradiseminipancake.jpg')} alt="paradiseminipancakes.jpeg" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/" />
                        </Card.Title>
                    </Card.ImgOverlay>
                </a>
            </Card>
        </>
    )
}
