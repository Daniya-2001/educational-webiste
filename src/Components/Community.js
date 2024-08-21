import React from 'react'
import './Community.css'
import tc from '../assets/img/tc.png'


function Community() {
    const handleClick =()=>{
        window.open('https://www.youtube.com/','blank')
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={tc} alt=''/>

            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join our free tech community</h2>
                <p className=''>Get access to exclusive content, events, and networking opportunities</p>
                    <button className='register-button' onClick={handleClick}>Join Now</button>

            </div>

        </div>

    </div>

  )
}

export default Community