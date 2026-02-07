import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/whiteLogo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/red_menubar.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 620 ? setSticky(true) : setSticky(false);
})
  },[]);
  const [mobilemenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobilemenu? setMobileMenu(false) : setMobileMenu (true)

  }

  return (
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className={mobilemenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-210} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-180} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-200} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
        <img src={menu_icon} alt="" className='red_menubar' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
