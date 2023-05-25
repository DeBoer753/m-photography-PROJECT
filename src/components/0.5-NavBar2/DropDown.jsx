// REACT:
import React, { useState } from 'react'

// ROUTER:
import { Link } from 'react-router-dom'

// DATA:
import { MenuItems } from './MenuItems' // this deconstructs and finds the variable holding the data

// CSS:
import './DropDown.css' 

export default function DropDown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {MenuItems.map((item, index) => {
        return (
          <li key={index}><Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link></li>
        )
      })}
    </ul>
    </>
  )
}