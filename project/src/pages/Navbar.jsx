import React from 'react'
import {Link} from 'react-router-dom'
import './Style/style.css'
export default function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>


        </ul>
    </div>
  )
}
