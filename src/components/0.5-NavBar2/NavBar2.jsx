// REACT:
import React, { useState } from 'react'

// ROUTER:
import { Link } from 'react-router-dom'

// COMPONENTS:
import DropDown from './DropDown'

// CSS:
import './NavBar2.css' 

// NAVBAR2:
export default function NavBar2() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>

      <nav className='navbar'>
        
        <Link to='/' className='navbar-logo'>Chris Blossom Media</Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link to='/services' className='nav-links' onClick={closeMobileMenu }>Services</Link></li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Link to='/work' className='nav-links' onClick={closeMobileMenu }>Work <i className='fas fa-caret-down'/></Link></li>
          {dropdown && <DropDown />}
          <li className='nav-item'><Link to='/reviews' className='nav-links' onClick={closeMobileMenu }>Reviews</Link></li>
          <li className='nav-item'><Link to='/about' className='nav-links' onClick={closeMobileMenu }>About</Link></li>
          <li className='nav-item'><Link to='/contact' className='nav-links' onClick={closeMobileMenu }>Contact</Link></li>
        </ul>

      </nav>

    </>
)
}