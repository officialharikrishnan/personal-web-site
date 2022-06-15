import React from 'react'
import './Footer.css'
import { Container} from 'react-grid-system';

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  function facebookLink(){
    window.location.replace('https://www.facebook.com/harikrishnan.puthumana.7')
  }
  function instagramLink(){
    window.location.replace('https://www.instagram.com/_me_h_a_r_i_/')
  }
  function linkedInLink(){
    window.location.replace('https://www.linkedin.com/in/harikrishnan-p-74523a1a9/')
  }
  function gitHubLink(){
    window.location.replace('https://github.com/officialharikrishnan')
  }
  return (
    <div className='footer'>
      <Container>
        
        
        <section>
        <FontAwesomeIcon onClick={facebookLink} className='icon' icon={faFacebook} size="3x" />
        <FontAwesomeIcon onClick={instagramLink} className='icon' icon={faInstagram} size="3x" />
        <FontAwesomeIcon onClick={linkedInLink} className='icon' icon={faLinkedin} size="3x" />
        <FontAwesomeIcon onClick={gitHubLink} className='icon' icon={faGithub} size="3x" />

        </section>
      </Container>
    </div>
  )
}

export default Footer