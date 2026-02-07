import React from 'react'
import './Services.css'
import ase from '../../assets/ase-logo.png'

const Services = () => {
  return (
    <section className="services">
      <div className="services-text">
    
                <img src={ase} alt="" />

        {/* <h3>Whatever the issue is, we've got you covered.</h3> */}
        <div className="services-columns">
          <div className="services-column">
            <h4>Transmission Repair</h4>
            <div className="services-grid">
              <div className="service-block">Slipping</div>
              <div className="service-block">Rebuilds</div>
              <div className="service-block">Diagnostics</div>
              <div className="service-block">Limp mode</div>
              <div className="service-block">Jerking</div>
              <div className="service-block">Overheating</div>
              <div className="service-block">Chattering</div>
              <div className="service-block">Leaks</div>
              <div className="service-block">Bad shifting</div>
            </div>
          </div>

          <div className="services-column">
            <h4>General Repair</h4>
            <div className="services-grid">
              <div className="service-block">Check engine</div>
              <div className="service-block">Suspension</div>
              <div className="service-block">Engine </div>
              <div className="service-block">Maintenance</div>
              <div className="service-block">Leaks</div>
              <div className="service-block">Steering</div>
              <div className="service-block">Brakes</div>
              <div className="service-block">AC & Heating</div>
              <div className="service-block">Electrical</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
