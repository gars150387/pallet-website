import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { ReviewData } from '../components/ReviewData';
import { ReviewTemplate } from '../components/ReviewTemplate';

import '../style/customer.css'


export const Customer = () => {

    return (
        <>
            <Card.Title id='customer-text' className='text-center'>These are a few comments from our customers</Card.Title>

            {ReviewData.map(({ id, image, owner, text, link }) => {
                return (
                    <Stack id='customer-column' direction="horizontal" gap={3}><ReviewTemplate id='review-rendered' key={id} image={image} owner={owner} text={text} link={link} /></Stack>
                )
            })}
        </>
    )
}
