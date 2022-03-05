import React from "react";
import useUser from "../hooks/useUser";
import menu_1 from "../../assets/menu-tres-puntos.svg";
import profile from "../../assets/snk-titan-steven.png";
import { Modal } from "./index"
import { Link } from "react-router-dom";
import { useModal } from '../hooks/index'

export default function ItemsNavBar({ menu, setMenu }) {
  const { logout, isLogged } = useUser();
  const {show, toggleModal} = useModal()

  return (
    <>
      {isLogged ? (
        <ul className={menu ? "dropdown-content active-dropdown" : "dropdown-content"}>
          <li className="navbar-item__link">
            <Link to="/" target="_blank">
              Mis Formularios
            </Link>
            <img onClick={() => setMenu((value) => !value)} className="dropbtn" src={menu_1} alt="menu-tres-puntos" />
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
                        Formularios
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item__link" to="/">
                        Editar Perfil
                    </Link>
                </li>
                <li>
                    <button
                        onClick={(e) => toggleModal(e)}
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
        <ul className={!menu ? "navbar-items" : "navbar-items__show"}>
          <li>
            <Link className="navbar-item__link" to="/">
              Formularios
            </Link>
          </li>
          <li>
            <Link className="navbar-item__link start-btn" to="/auth">
              Comenzar
            </Link>
          </li>
        </ul>
      )}
      <Modal show={show} toggle={toggleModal}>
        <h1 className="title-logout">¿Seguro quieres Cerrar Sesión?</h1>
        <div className="navbar-logout__buttons">
            <button className="button-effect-one-red navbar-cancel__button" onClick={e => toggleModal(e)}>Cancelar</button>
            <button className="button-effect-one navbar-logout__button" onClick={() => logout()}>Aceptar</button>
        </div>
      </Modal>
    </>
  );
}
