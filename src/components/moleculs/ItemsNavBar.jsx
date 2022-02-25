import React from "react";
import useUser from "../hooks/useUser";
import menu_1 from "../../assets/menu-tres-puntos.svg";
import profile from "../../assets/snk-titan-steven.png";
import { Link } from "react-router-dom";

export default function ItemsNavBar({ menu, setMenu }) {
  const { logout, isLogged } = useUser();

  return (
    <>
      {isLogged ? (
        <ul className={menu ? "dropdown-content active-dropdown" : "dropdown-content"}>
          <li className="navbar-item__link">
            <Link to="/" target="_blank">
              Mis Formularios
            </Link>
            <img className="dropdown" onClick={() => setMenu((value) => !value)} className="dropbtn" src={menu_1} alt="menu-tres-puntos" />
          </li>
          <li className={menu ? "dropdown-submenu dropdown-submenu__active" :"dropdown-submenu navbar-hidden"}>
            <ul>
                <li>
                    <Link className="navbar-item__link" to="/">
                        Crear Formulario
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item__link" to="/">
                        Editar Perfil
                    </Link>
                </li>
                <li>
                    <button
                        onClick={() => logout()}
                        className="button button-logout navbar-item__link"
                    >
                        Cerrar Sesión
                    </button>
                </li>
            </ul>
          </li>
          <li className="img-profile">
            <div className="img-container">
              <img src={profile} alt="profile-img" />
            </div>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="navbar-item__link" to="/" target="_blank">
              Formularios
            </Link>
          </li>
          <li>
            <Link className="navbar-item__link" className="start-btn" to="/">
              Comenzar
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
