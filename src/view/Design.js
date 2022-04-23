import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import { DesignTemplate } from '../components/DesignTemplate';
import { DesignData } from '../components/DesignData';
import { ScrollUp } from '../components/ScrollUp';


import '../style/design.css'


export const Design = () => {

    const [value, setvalue] = useState('pergola')


    const handleClick = ({ setvalue }) => {
        setvalue()
    }

    const renderedChoice = DesignData.filter((item) => item.category === value)


    return (
        <div className='designComponent'>

            <Container>
                <Row>
                    <Col md={{ spam: 6, offset: 4}} className='justify-content-center'>
                        <ButtonGroup id="button-group" onClick={handleClick} size="lg" className="mb-2 mt-3" variant="dark">
                            <Col sm><Button id='button' onClick={() => setvalue('pergola')} variant="dark" style={{ border: 'white solid 1px' }}>Pergola</Button> </Col>
                            <Col sm><Button id='button' onClick={() => setvalue('floor')} variant="dark" style={{ border: 'white solid 1px' }}>Floor</Button></Col>
                            <Col sm><Button id='button' onClick={() => setvalue('furnitures')} variant="dark" style={{ border: 'white solid 1px' }}>Furnitures</Button></Col>
                            <Col sm><Button id='button' onClick={() => setvalue('adornos')} variant="dark" style={{ border: 'white solid 1px' }}>Decoration</Button></Col>
                        </ButtonGroup>
                    </Col>
                </Row>
                <ScrollUp />
                <Row>
                    <Col md={{ span: 6, offset: 3 }} >
                        {
                            renderedChoice.map((item) => {

                                console.log('renderedChoice', renderedChoice)

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