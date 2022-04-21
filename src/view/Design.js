import React from 'react'
import { DesignTemplate } from '../components/DesignTemplate';
import { DesignData } from '../components/DesignData';
import { ScrollUp } from '../components/ScrollUp';

import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

export const Design = () => {

    return (
        <div className='designComponent'>

            <Container>
                <Row>
                    <ButtonGroup size="lg" className="mb-2 mt-3" variant="dark">
                        <Button variant="dark" style={{ border: 'white solid 1px' }}>Furnitures</Button>
                        <Button variant="dark" style={{ border: 'white solid 1px' }}>Pargol</Button>
                        <Button variant="dark" style={{ border: 'white solid 1px' }}>Floor</Button>
                    </ButtonGroup>
                </Row>
                <ScrollUp />
                <Row>
                    <Col md={{ span: 6, offset: 3 }} >

                        {DesignData.map((item) => {

                            const id = Math.floor(Math.random() * 900 + 1)

                            return (
                                <DesignTemplate key={id} img={item.img} />
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}