import React from 'react'
import { Card } from 'react-bootstrap'

import '../img/reviews/lavieenjuice.jpg'

export const ReviewFormat2 = () => {
    return (
        <>
            <Card className="bg-dark text-white mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CYgx6BDOqqv/">
                    <Card.Img src={require('../img/reviews/lavieenjuice.jpg')} alt="lavieenjuice" />

                    <Card.ImgOverlay className='bg-light' style={{ height: '40vh', width: '20vw', position: 'absolute', top: '20%', left: '30%', opacity: '0.5', border: 'solid 1px black', borderRadius: '15px' }}>
                        <Card.Text style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', fontWeight: '650' }}>
                            "Muchas Gracias por tu hermoso trabajo! 💚"
                        </Card.Text>
                        <Card.Title style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', paddingLeft: '5%' }}>
                            lavieenjuice
                            {/* <Card.Img style={{ width: '50%', height: '15%', margin: 'auto', position: 'absolute', bottom: '15%', left: '5%', cursor: 'pointer' }} src={require('../img/reviews/paradiseminipancake.jpg')} alt="paradiseminipancakes.jpeg" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/" /> */}
                        </Card.Title>
                    </Card.ImgOverlay>
                </a>
            </Card>
        </>
    )
}