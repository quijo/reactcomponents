import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <>
    <header>

    <Link to="home" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Home</Link>
    <Link to="about" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>About</Link>
    
       
        
    </header>
    </>
  )
}

export default Navbar