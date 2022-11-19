import { NavLink } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <NavLink to='/Registration'>Registration</NavLink>
        <NavLink to='/Dashboard'>Dashboard</NavLink>
    </nav>
  )
}

export default Navbar