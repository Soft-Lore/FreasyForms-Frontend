import React from 'react'
import menu_1 from '../../assets/menu-tres-puntos.svg'
import menu_2 from '../../assets/menu-tres-rayas.svg'
import profile from '../../assets/snk-titan-steven.png'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function NavBar({menu, setMenu}) {
    const token = 'null'

  return (
    <nav className="navbar">
        <Link to="/">
            <img className='navbar-logo' src={logo} alt="logo" />
        </Link>
        <ul>
            <li>
                <a className='paragraph' href="#" target="_blank">Formularios</a>
            </li>
            {
                token ? (
                    <>
                        <li>
                            <a className='paragraph' href="#" target="_blank">Mis Formularios</a>
                        </li>
                        <li className="dropdown" onClick={() => setMenu(value => !value)}>
                            <img className="dropbtn" src={menu_1} alt="menu-tres-puntos" />
                            <div className={menu ? "dropdown-content active-dropdown" : "dropdown-content"} data-dropdown-menu>
                                <a className='paragraph' href="#">Crear Formulario</a>
                                <a className='paragraph' href="#">Editar Perfil</a>
                                <a className='paragraph' href="#">No se que mas</a>
                            </div>
                        </li>
                        <li className="img-profile">
                            <div className="img-container">
                                <img src={profile} alt="profile-img" />
                            </div>
                        </li>
                    </>
                ) : (
                    <li>
                        <a className='paragraph' className="start-btn" href="../pages/SignUp.html">Comenzar</a>
                    </li>
                )
            }
        </ul>
        <div className="dropdown-menu" onClick={() => setMenu(value => !value)}>
            <img className="dropbtn-right" src={menu_2} alt="menu-tres-rayas" data-dropdown-button />
            <div className={menu ? "active-dropdown-menu" : 'inactive-dropdown-menu'}>
                {
                    token ? (
                        <ul className='dropdown-list'>
                            <li className="dropdown-list__profile">
                                <img src={profile} className="dropdown-profile__img" alt="img-profile" />
                                <span className='dropdown-profile__username'>@BaBuni69</span>
                            </li>
                            <li>
                                <a className='paragraph' href="#">Formularios</a>
                            </li>
                            <li>
                                <a className='paragraph' href="#">Mis formularios</a>
                            </li>
                            <li>
                                <a className='paragraph' href="#">Crear formualrio</a>
                            </li>
                            <li>
                                <a className='paragraph' href="#">Editar perfil</a>
                            </li>
                            <li>
                                <a className='paragraph' href="#">No se que mas</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className='dropdown-list'>
                            <li>
                                <a className='paragraph' href="#" target="_blank">Formularios</a>
                            </li>
                            <li>
                                <a className='paragraph' className="start-btn" href="../pages/SignUp.html">Comenzar</a>
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    </nav>
  )
}
