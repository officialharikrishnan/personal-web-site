import React from 'react'
import './Contact.css'
import { Container, Row, Col } from 'react-grid-system';

function Contact() {
  return (
    <div id='contact'>
        <Container>
        <h1>Contact</h1>
        <form action="">
        <Row>
          <Col sm={12}>
            <div className="inputarea">

            <i className="fa fa-user fa-2x"></i>
            <input type="text" placeholder="Enter Username" />
            </div>
          </Col>
          <Col sm={12}>
            <div className="inputarea">

          <i className="fa fa-envelope fa-2x"></i>
            <input type="text" placeholder="Enter Email" />
            </div>
          </Col>
          <Col sm={12}>
            <div className="inputarea">

          <i className="fa fa-pencil-square fa-2x"></i>
            <textarea type="text"  placeholder="...🖊" />
            </div>
          </Col>
        </Row>
        <button>Sent</button>
        </form>
        </Container>
    </div>
  )
}

export default Contact