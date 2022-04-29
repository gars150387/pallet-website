import React from 'react'
import { Carousel } from 'react-bootstrap'
import { ReviewFormat } from './ReviewFormat'
import { ReviewFormat2 } from './ReviewFormat2'
import { ReviewFormat3 } from './ReviewFormat3'

export const CarouselReviews = () => {
    return (
        <>
            <Carousel fade style={{ height: '25%', width: '100%', borderRadius: '15px'}}>
                <Carousel.Item>
                    <ReviewFormat />
                </Carousel.Item>
                <Carousel.Item>
                    <ReviewFormat2 />
                </Carousel.Item>
                <Carousel.Item>
                    <ReviewFormat3 />
                </Carousel.Item>
            </Carousel></>
    )
}
