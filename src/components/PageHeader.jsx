import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const PageHeader = ({ title, image_url }) => {
    

  return (
    <div className='header-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/header-bg-imgs/bg1.jpg')`}}>
      <h1>We're here for a very simple reason. <br /> To make a difficult start to life that <br /> little bit easier.</h1>
      <div className='home-btns-hero'>
        <NavLink to='/findsupport'>
        <button className='primary-btn'>Find Support</button>
        </NavLink>
        
        <NavLink to='/about'>
        <button className='secondary-btn'>Learn More</button>
        </NavLink>
        
      </div>
      
    </div>
  )
}

export default PageHeader