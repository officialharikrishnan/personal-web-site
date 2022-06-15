import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-grid-system';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
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
        
        <section>
        <FontAwesomeIcon className='icon' icon={faFacebook} size="3x" />
        <FontAwesomeIcon className='icon' icon={faInstagram} size="3x" />
        <FontAwesomeIcon className='icon' icon={faLinkedin} size="3x" />
        <FontAwesomeIcon className='icon' icon={faGithub} size="3x" />

        </section>
      </Container>
    </div>
  )
}

export default Footer