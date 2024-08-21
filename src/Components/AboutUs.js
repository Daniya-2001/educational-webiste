import React from 'react'
import './AboutUs.css'
import BUSINESSMAN from '../assets/img/BUSINESSMAN.png'


function AboutUs() {
    const AboutUs =()=>{

    }
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-members'>
                <h2>Our Team</h2>
                <div className='member-card'>
                    <img
                        src={ BUSINESSMAN}
                       className='member-image'
                        alt=""
                    />
                    <h3 className='member-name'>Daniel Andrew</h3>
                    <p className='member-role'>Co-Founder</p>

                    
                </div>

            </div>
            <div className='about-us-description'>
                <h1 className='about-heading'>About Us</h1>
                <p className='about-text'>
                    We are a team of passionate individuals who are dedicated
                     to creating innovative solutions that make a positive impact



                </p>

            </div>
        </div>


    </div>
  )
}

export default AboutUs