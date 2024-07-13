import React from 'react'
import './footer.scss'
import { ImOffice } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer_container'>
      <footer>
        <div className='company'>
          <span>Apex Financial Service Bank</span>
          <p>All in one business banking for whatever your need might be.</p>
          <div className='icons'></div>
        </div>
        <div className='links'>
          <span>Quick Links</span>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className='contact'>
        <span>Contact Address</span>
          <div className='address'>
            <ImOffice/>
            <p>UNIT D10 CROSS GREEN APPROACH, LEEDS LS9 OSG, UNITED KINGDOM</p>
          </div>
          <div className='email'>
            <MdEmail/>
            <p>support@apexfinancial.com</p>
          </div>
        </div>
      </footer>
      <div className='copyright'>
          <p>© 2024 Apex Financial All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer