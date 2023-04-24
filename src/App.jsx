import React from 'react'
import Navigation from './Navigation'
import  Carousel  from './Carousel'
import Card from './Card'
import { Container, Row, Col } from 'react-bootstrap'
function App() {
  return (
    <div>

    <Navigation />
    <Carousel />
    
    <Container className='mt-4'>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App