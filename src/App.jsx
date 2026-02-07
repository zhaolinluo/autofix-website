import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
const App = () => {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Title subTitle='Services' title='Every repair that gets done at AutoFix is with full confidence, thanks to our ASE certified and State certified technicians.'/> 
    <Services/>
    {/* <Reviews/> */}
    <Title subTitle='About Us' title='Family Owned & Operated'/>
    <About/>
    <div className='container'/>
      <Title subTitle='Contact Us' title='' />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App