import React from 'react'
import './Contact.css'
import { Container, Row, Col } from 'react-grid-system';

function Contact() {
  return (
    <div>
        <Container>
        <h1>Contact</h1>
        <form action="">
        <Row>
          <Col sm={6}>
            <i className="fa fa-user fa-2x"></i>
            <input type="text" placeholder="Enter Username" />
          </Col>
          <Col sm={6}>
          <i className="fa fa-envelope fa-2x"></i>
            <input type="text" placeholder="Enter Email" />
          </Col>
          <Col sm={12}>
          <i className="fa fa-pencil-square fa-2x"></i>
            <textarea type="text"  placeholder="...🖊" />
          </Col>
        </Row>
        <button>Sent</button>
        </form>
        </Container>
    </div>
  )
}

export default Contact