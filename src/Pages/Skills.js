import React, { useContext, useEffect } from 'react'
import './Skills.css'
import ProgressBar from 'react-percent-bar';
import { Row, Col } from 'react-grid-system';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HomeRedirect } from '../Context/Homecontext';
function Skills() {
    const {setHomeButton} = useContext(HomeRedirect)
    useEffect(()=>{
        Aos.init({ duration: 2000 })
        setHomeButton(true)
    },[])
    return (
        <div>

            <section id='skills'>
                <div className="heading">
                        <h1 data-aos="fade-left">Skills</h1>
                </div>
                <Row>
                    <Col md={6}>
                        <h3>REACT JS</h3>
                    </Col>
                    <Col md={6}>
                    <div className="skillbar">
                        <ProgressBar fillColor="blue"  colorShift={false} percent={70} />
                     </div>
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <h3>NODE JS</h3>
                    </Col>
                    <Col md={6}>
                    <div className="skillbar">
                        <ProgressBar fillColor="blue"  colorShift={false} percent={40} />
                     </div>
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <h3>MONGODB</h3>
                    </Col>
                    <Col md={6}>
                    <div className="skillbar">
                        <ProgressBar fillColor="blue"  colorShift={false} percent={30} />
                     </div>
                    </Col>
                </Row>
            </section>
            
        </div>
    )
}

export default Skills