import React from 'react'
import './Home.css'
import meta from '../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Components/Courses'
import Community from './Community'
import Plans from './Plans'

function Home() {
   const handlClick =()=>{
        window.open ('https://www.youtube.com/')
   }
  return (
    <>
   <section>
    <div className="home-container">
        <div className='home-container'>
            
            <div className="home-content">
                <h2 className='section_title'>Learn Everything For Free ..!</h2>
                <p>Similar to the QAT, select commands from the you've created on the right.</p>
                <div className='home-buttons'>
                    <button className='register-button' onClick={handlClick}>Get started</button>
                    <button className='register-button' onClick={handlClick}>Watch now</button>

                </div>

            </div>
            <div className='home-img'>
                
                <div className='home-wrapper'>
                    <div className='box-01
                    '>
                        <div className='box-img'>
                            <img src={meta}/>

                        </div>
                        <div className='whatsapp-container'>
                            <h5>500+ students</h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className='support'>
                            <h5>24/7 Support</h5>   

                        </div>


                    </div>

                </div>

            </div>

        </div>
    </div>
   </section>
   <Courses/>
   <Community/>
   <Plans/>
   </>
  )
}

export default Home