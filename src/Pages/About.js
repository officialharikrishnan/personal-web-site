import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-grid-system';
import Aos from 'aos'
import 'aos/dist/aos.css'
function About() {
  return (
    <div>
        <section id='about'>
                <Row>
                    <Col sm={6}>
                        <h1 data-aos="fade-left">About</h1>
                    </Col>
                    <Col sm={6}>
                        <h2>I am a MERN Stack developer, <br /> with computer hardware background, <br /> i improved my coding skill through self learning <br /> My speciality is problem solving and self learning ability.</h2>
                    </Col>
                </Row>

            </section>
    </div>
  )
}

export default About