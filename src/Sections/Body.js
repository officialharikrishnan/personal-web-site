import React, { useEffect } from 'react'
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
    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1fCqZp3TzOFdOgdp_RGfLSp-o3HpWB9Xh/view?usp=sharing"
    }
    const sendEmail = () => {
        window.open("mailto:harikrishnanpnr001@gmail.com?subject=Welcome to ....&body=Dear Harikrishnan,");
    };
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
                    <button onClick={sendEmail}>Hire Me</button>
                    <button onClick={downloadFile}>Download CV</button>
                </div>
            </Container>
        </div>
    )
}

export default Body