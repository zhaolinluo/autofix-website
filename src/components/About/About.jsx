import React from 'react'
import './About.css'
import shop from '../../assets/shop.jpg'

const About = () => {
  return (
    <>
        <div className='about'>

          <div className='.about-section'>
              <ul>What We Believe In</ul>
              <p>We believe in honest communication, fair pricing, and treating every customer like family. Whether it's routine maintenance or a complex repair,
                  we take the time to explain the issue and recommend the best solution for your vehicle.</p>
          </div>
          <div className='.about-section'>
              <ul>Why We Do What We Do</ul>
              <p>Nowadays skilled workers are rare and honest, skilled workers even more so. We are proud of being a rare gem.
                  With AutoFix you can be certain that there's full transperancy and honesty in every repair. </p>
          </div>
          <div className='.about-section'>
              <ul>What To Expect</ul>
              <p>At AutoFix Transmissions you will be cordially greated and recieved by our receptionist who will gather basic
                  information on your vehicle, shortly after you will have the opportunity to explain your concern to a
                  qualified technician who will ultimatly suggest and perform any needed repairs.</p>
          </div>

        </div>
        <div className='shop'>
            <img src={shop} alt=''></img>
        </div>
    </>
  )
}

export default About
