import React from 'react'
import { DesignTemplate } from '../components/DesignTemplate';
import { DesignData } from '../components/DesignData';

import { Container, Row, Col } from 'react-bootstrap';

export const Design = () => {

    return (
        <div className='designComponent'>
            <Container>
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