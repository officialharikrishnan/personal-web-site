import React, { useEffect} from 'react'
import './Body.css'
import { Container, Row, Col } from 'react-grid-system';
import image from '../images/IMG_0011.JPG'
import Aos from 'aos'
import 'aos/dist/aos.css'

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
            
        </div>
    )
}

export default Body