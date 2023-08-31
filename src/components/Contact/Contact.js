import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from "react-scroll";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="contact" >
        <h1>Contact</h1>
        <div className='contact-container'>
          <p>
            Email : <span>bharanilogesh2001@gmail.com</span>
          </p>
          <p>
            Github Username : <span>bharanilogesh</span>
          </p>
          <p>
            Contact: <span>9659293618</span>
          </p>
          <div className='contact-icons'>
            <a href="https://www.facebook.com/bharani.logesh.94">
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/bharani__loki/">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/bharani-logesh-774b2a263/">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </div>
        </div>
    </Element>
  )
}

export default Contact
