import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className='footer-stuff'>
       <i>The Little Miracles Trust  <br />
        Providing support to families of premature or sick full-term babies as they make their journey through neonatal care, the transition home, and onwards. </i>
        <div id='media-icons'>
        <FaFacebook />
        <BsInstagram />
        <FaLinkedin />
        </div>

        </div> 

        <div className='footer-stuff'>
          <h3>Support Us</h3>
          <p>About Us <br />
          Make a Donation <br />
          Leave a Legacy <br />
          How you can help
          </p>
        </div>   

        <div className='footer-stuff'>
        <h3>Latest News</h3>
          <p>Our Support <br />
          In the News <br />
          Personal Stories <br />
          Connect with Us
          </p>
        </div>

        <div className='footer-stuff'>
        <h3>Physical Locations</h3>
        <p>Ward 92 NICU, Level 9 I, Auckland City <br /> Hospital, Park Road, Grafton, Auckland <br /> – Phone 09 3074949 extn 25469
       <br /> NICU, Level 4, Wellington Regional <br /> Hospital, Riddiford Street, Newtown, <br /> Wellington Phone 04 8060790</p>
        </div>

    </footer>
  )
}

export default Footer
