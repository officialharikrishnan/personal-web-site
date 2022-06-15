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
  return (
    <div className='footer'>
      <Container>
        
        
        <section>
        <FontAwesomeIcon className='icon' icon={faFacebook} size="3x" />
        <FontAwesomeIcon className='icon' icon={faInstagram} size="3x" />
        <FontAwesomeIcon className='icon' icon={faLinkedin} size="3x" />
        <FontAwesomeIcon className='icon' icon={faGithub} size="3x" />

        </section>
      </Container>
    </div>
  )
}

export default Footer