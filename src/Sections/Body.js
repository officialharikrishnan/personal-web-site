import React from 'react'
import './Body.css'
import { Container, Row, Col } from 'react-grid-system';
import image from '../images/IMG_0011.JPG'

import './Body.css'
function Body() {
    return (
        <div>

            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={image} alt="" />
                    </Col>
                    <Col sm={8}>
                        <h1>Hai, <br /> I am Harikrishnan</h1>
                        <button>Hire Me</button>
                        <button>Download CV</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Body