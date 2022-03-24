import React, {useState, useEffect} from 'react'
import icon from '../../assets/menu-tres-rayas.svg'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import ItemsNavBar from '../moleculs/ItemsNavBar'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation()

  function updateMenu () {
    setMenu((value) => !value)
  }

  useEffect(() => {
    setMenu(false)
  }, [location])

  return (
    <nav className="navbar">
        <Link to="/">
            <img className='navbar-logo' src={logo} alt="logo" />
        </Link>
        <ItemsNavBar toggleMenu={updateMenu} menu={menu} setMenu={setMenu} />
        <img className="dropbtn-right" src={icon} alt="menu-tres-rayas" onClick={() => updateMenu()} />
    </nav>
  )
}
