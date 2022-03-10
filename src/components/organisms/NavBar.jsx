import React from 'react'
import icon from '../../assets/menu-tres-rayas.svg'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import ItemsNavBar from '../moleculs/ItemsNavBar'

export default function NavBar(props) {
  function updateMenu () {
    props.setMenu((value) => !value)
  }

  return (
    <nav className="navbar">
        <Link to="/">
            <img className='navbar-logo' src={logo} alt="logo" />
        </Link>
        <ItemsNavBar toggleMenu={updateMenu} {...props} />
        <img className="dropbtn-right" src={icon} alt="menu-tres-rayas" onClick={() => updateMenu()} />
    </nav>
  )
}
