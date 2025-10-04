import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
        <p className='text-2xl font-bold text-gradient' >RESUMIND</p>
        </Link>
        <Link to="/upload"className='primaryButton w-fix' >
        Upload Resum
        </Link>
    </nav>
  )
}

export default NavBar