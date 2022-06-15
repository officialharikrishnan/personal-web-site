import React from 'react'
import './Skills.css'
import ProgressBar from 'react-percent-bar';
import { Container, Row, Col } from 'react-grid-system';
import Aos from 'aos'
import 'aos/dist/aos.css'
function Skills() {
    return (
        <div>
            <section id='skills'>

                <Row>
                    <Col sm={6}>
                        <h1 data-aos="fade-left">Skills</h1>
                    </Col>
                    <Col sm={6}>
                        <h3>REACT JS</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={70} />
                        <h3>NODE JS</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={50} />
                        <h3>MONGODB</h3>
                        <ProgressBar fillColor="blue" colorShift={false} percent={40} />
                    </Col>
                </Row>
            </section>
            
        </div>
    )
}

export default Skills