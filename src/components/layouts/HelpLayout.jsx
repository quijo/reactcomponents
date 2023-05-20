import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayou = () => {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, enim!</p>
        <nav>
            <NavLink to='faq'>view the FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayou