import React from 'react'
import { Card } from 'react-bootstrap'

// import '../img/pergola/pergola (21).jpeg'


export const ReviewFormat = () => {
    return (
        <>
            <Card className="bg-dark text-white mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/">
                    {/* <Card.Img src={require('../img/pergola/pergola (21).jpeg')} alt="pergola (21).jpeg" /> */}

                    <Card.ImgOverlay className='bg-light' style={{ height: '40vh', width: '20vw', position: 'absolute', top: '20%', left: '30%', opacity: '0.5', border: 'solid 1px black', borderRadius: '15px' }}>
                        <Card.Text style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', fontWeight: '650' }}>
                           "The best in Miami, highly recommend them !!! Thank you for our beautiful tables and excellent service ⭐️⭐️⭐️⭐️⭐️"
                        </Card.Text>
                        <Card.Title style={{ color: '#212529', fontSize: '25px', fontFamily: '600', marginTop: '10%', paddingLeft: '5%' }}>
                           paradiseminipancakes
                            {/* <Card.Img style={{ width: '50%', height: '15%', margin: 'auto', position: 'absolute', bottom: '15%', left: '5%', cursor: 'pointer' }} src={require('../img/reviews/paradiseminipancake.jpg')} alt="paradiseminipancakes.jpeg" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CbJUY8fucVp/" /> */}
                        </Card.Title>
                    </Card.ImgOverlay>
                </a>
            </Card>
        </>
    )
}
