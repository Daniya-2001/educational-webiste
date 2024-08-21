import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import  Plans  from '../Components/Plans'
import  Courses  from '../Components/Courses'
import AboutUs from  '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'
import Support from '../Components/Support'


function LayoutRoutes() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Plans/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/Aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/support' element={<Support/>}/>
      
      
    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoutes