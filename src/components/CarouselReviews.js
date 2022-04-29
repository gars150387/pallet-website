import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

import { ReviewFormat } from './ReviewFormat'
import { ReviewFormat2 } from './ReviewFormat2'
import { ReviewFormat3 } from './ReviewFormat3'

import '../style/carouselReviews.css'
import { Route } from 'react-router'

export const CarouselReviews = () => {
    return (
        <Container id='container-fluid' fluid>
            <Row>
                <Col className='text-center ' style={{ color: 'whitesmoke', paddingTop: '2%'}}>
                    <h2>
                        These are a few comments from our Customers
                    </h2>
                </Col>
            </Row>
            <Col className="reviews animate_animated animate__backInDown" md={{ span: 6, offset: 3 }}>
                <Carousel fade style={{ height: '25%', width: '100%', borderRadius: '15px' }}>
                    <Carousel.Item>
                        <ReviewFormat />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReviewFormat2 />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReviewFormat3 />
                    </Carousel.Item>
                </Carousel>
            </Col>

        </Container>
    )
}
