import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup, Card } from 'react-bootstrap';

import { DesignTemplate } from '../components/DesignTemplate';
import { DesignData } from '../components/DesignData';
import { ScrollUp } from '../components/ScrollUp';



export const Design = () => {

    const [value, setvalue] = useState('pergola')

    const handleClick = ({ setvalue }) => {

        switch (value) {
            case 'furnitures':
                return value
            case 'pergola':
                return value
            case 'floor':
                return value
            case 'adornos':
                return value;
            default:
        }
    }



    const renderedChoice = DesignData.filter((item) => item.category === value)


    return (
        <div className='designComponent'>

            <Container>
                <Row>
                    <ButtonGroup onClick={handleClick} size="lg" className="mb-2 mt-3" variant="dark">
                        {/* <Button onClick={() => setvalue('all')} variant="light" style={{ border: 'white solid 1px' }}>All</Button> */}
                        <Button onClick={() => setvalue('furnitures')} variant="dark" style={{ border: 'white solid 1px' }}>Furnitures</Button>
                        <Button onClick={() => setvalue('pergola')} variant="dark" style={{ border: 'white solid 1px' }}>Pergola</Button>
                        <Button onClick={() => setvalue('floor')} variant="dark" style={{ border: 'white solid 1px' }}>Floor</Button>
                        <Button onClick={() => setvalue('adornos')} variant="dark" style={{ border: 'white solid 1px' }}>Decoration</Button>
                    </ButtonGroup>
                </Row>
                <ScrollUp />
                <Row>
                    <Col md={{ span: 6, offset: 3 }} >
                        {
                            renderedChoice.map((item) => {

                                console.log( 'renderedChoice', renderedChoice )

                                return (
                                    <DesignTemplate key={item.id} img={item.img} />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>

        </div>
    )
}