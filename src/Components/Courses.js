import React from 'react'
import './Courses.css'
import ai from '../assets/img/ai.png'
import sd from '../assets/img/sd.png'
import dg from '../assets/img/dg.png'
import hacking from '../assets/img/hacking.png'

function Courses() {
    const courseData =[
        {
        title:'AI Developement',
        description:'This is a course on AI development.',
        img:ai
    },
    {
        title:'Software Development',
        description:'This is a course on software development.',
        img:sd
    },
    {
        title:'Data Science',
        description:'This is a course on data science.',
        img:dg
    },
    {
        title:'Hacking',
        description:'This is a course on hacking.',
        img:hacking
    }
]
  return (
    <div className='courses-container'>
        <div className='course-top'>
            <h2 className='section_title'>Our Free Courses</h2>
            <p>Top Treandin free courses are available now</p>
            <div className='course-wrapper'>
                {
                    courseData.map((course,index)=>(
                        <div className='course-item' key={index}>
                    <span className='course-icon'>
                       <img src={course.img} alt=''/>
                    </span>
                    <div className='course-content'>
                        <h4>{course.title}</h4>
                        <p>{course.description}</p>
                        

                    </div>

                </div>

                    ))
                }
                
            </div>

        </div>
        
    </div>
  )
}

export default Courses