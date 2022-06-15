import React,{useContext, useEffect} from 'react'
import './About.css'
import { Row, Col } from 'react-grid-system';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HomeRedirect } from '../Context/Homecontext';
function About() {
  const {setHomeButton} = useContext(HomeRedirect)
  useEffect(()=>{
    Aos.init({ duration: 2000 })
    setHomeButton(true)
},[])
  return (
    <div>
        <section id='about'>
                        <h1 data-aos="fade-left">About</h1>
                <Row>
                    <Col md={12}>
                        <h2>I am a MERN Stack developer, with computer hardware background, i improved my coding skill through self learning  My speciality is problem solving and self learning ability.</h2>
                    </Col>
                </Row>

            </section>
    </div>
  )
}

export default About