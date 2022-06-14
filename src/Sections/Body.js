import React, { useEffect, useState } from 'react'
import './Body.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Container, Row, Col } from 'react-grid-system';
import image from '../images/IMG_0011.JPG'
import ProgressBar from 'react-percent-bar';


import './Body.css'
function Body() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>

            <Container>
                <section id='header'>

                <Row>
                    <Col sm={4}>
                        <h1 id='heading' data-aos="fade-up">Hai, <br /> I am Harikrishnan</h1>
                    </Col>
                    <Col sm={8}>
                        <img src={image} alt="" />
                    </Col>
                </Row>
                </section>
                <div className="btn">
                    <button>Hire Me</button>
                    <button>Download CV</button>
                </div>
                
            </Container>
            <section id='skills'>

                <Row>
                    <Col sm={6}>
                    <div  ><h1 data-aos="fade-left">Skills</h1></div>
                    </Col>
                    <Col sm={6}>
                        <h3>NODE JS</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={50} />
                        <h3>MONGODB</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={40} />
                        <h3>REACT</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={70} />
                    </Col>
                </Row>
                </section>
        </div>
    )
}

export default Body