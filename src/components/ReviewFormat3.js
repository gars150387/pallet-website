import React from 'react'
import { Card } from 'react-bootstrap'

import '../img//reviews/theguesthousecollection.jpg'


export const ReviewFormat3 = () => {
    return (
        <>
            <Card className="bg-dark text-white mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CYSBjdIulaa/">
                    <Card.Img src={require('../img/reviews/theguesthousecollection.jpg')} alt="theguesthousecollection" />

                    <Card.ImgOverlay className='bg-light' style={{ height: '40vh', width: '20vw', position: 'absolute', top: '20%', left: '30%', opacity: '0.5', border: 'solid 1px black', borderRadius: '15px' }}>
                        <Card.Text style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', fontWeight: '650' }}>
                            "Thank you for all of the amazing work!! 🙌🔥"
                        </Card.Text>
                        <Card.Title style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', paddingLeft: '5%' }}>
                        theguesthousecollection
                        </Card.Title>
                    </Card.ImgOverlay>
                </a>
            </Card>
        </>
    )
}