import React, { useContext, useEffect } from 'react'
import './Contact.css'
import { Container, Row, Col } from 'react-grid-system';
import { HomeRedirect } from '../Context/Homecontext';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  const navigate = useNavigate()
  const {setHomeButton} = useContext(HomeRedirect)
  useEffect(()=>{
    Aos.init({ duration: 2000 })
      setHomeButton(true)
  },[setHomeButton])
  
    const submit = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_2is9e3m',
          'template_7dju6vp',
          e.target,
          'o_rCVXT5vjDS3ogzN')
          .then((res) => {
              navigate('/')
              
          }).catch((err) => {
              console.log(err);
              alert("Error")
          })

  }
  return (
    <div id='contact'>
        <Container>
        <h1 data-aos="fade-left">Contact</h1>
        <form action="" onSubmit={submit}>
        <Row>
          <Col sm={12}>
            <div className="inputarea">

            <i className="fa fa-user fa-2x"></i>
            <input type="text" name='name' placeholder="Enter Username" required/>
            </div>
          </Col>
          <Col sm={12}>
            <div className="inputarea">

          <i className="fa fa-envelope fa-2x"></i>
            <input type="text" name='Email' placeholder="Enter Email" required/>
            </div>
          </Col>
          <Col sm={12}>
            <div className="inputarea">

          <i className="fa fa-pencil-square fa-2x"></i>
            <textarea type="text" name='Suggestions' placeholder="...🖊" />
            </div>
          </Col>
        </Row>
        <button type='submit'  id='btn'>Sent</button>
        </form>
        </Container>
    </div>
  )
}

export default Contact