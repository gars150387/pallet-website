import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Card } from 'react-bootstrap'

export const Error404 = () => {
  return (
    <Container>
      <Col>
        <Card.Title>
          <h1>404 Error...</h1>
        </Card.Title>
        <Card.Text style={{ textDecoration: 'none', color: 'black', marginTop: '35px' }}>
          <h4>To be relocated please click link below
            <br />
            <Link style={{ textDecoration: 'none', color: 'black' }} to='./'>
              <p style={{ color: '#212529', marginTop: '50px' }}>
                www.pallet305.com
              </p>
            </Link>
          </h4>
        </Card.Text>
      </Col>
    </Container>
  )
}
