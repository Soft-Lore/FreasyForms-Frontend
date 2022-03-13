import React from "react";
import useUser from "../hooks/useUser";
import menu_1 from "../../assets/menu-tres-puntos.svg";
import profile from "../../assets/snk-titan-steven.png";
import { Modal } from "./index"
import { Link } from "react-router-dom";
import { useModal } from '../hooks/index'
import { useNavigate } from "react-router-dom";

export default function ItemsNavBar({ menu, setMenu }) {
  const { logout, isLogged } = useUser();
  const navigate = useNavigate()
  const {show, toggleModal} = useModal()

  const logOut = () => {
    logout()
    toggleModal()
    navigate('/')
  }

  return (
    <>
      {isLogged ? (
        <div className={menu ? "dropdown-content active-dropdown" : "dropdown-content"}>
          <ul>
          <li className="navbar-item__link">
            <Link to="/surveys">
              Mis Formularios
            </Link>
            <img onClick={() => setMenu((value) => !value)} className="dropbtn" src={menu_1} alt="menu-tres-puntos" />
          </li>
          <li className={menu ? "dropdown-submenu dropdown-submenu__active" :"dropdown-submenu navbar-hidden"}>
            <ul>
                <li>
                    <Link className="navbar-item__link" to="/create-survey">
                        Crear Formulario
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item__link" to="/surveys">
                        Formularios
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item__link" to="/profile/fdsafsd">
                        Editar Perfil
                    </Link>
                </li>
                <li>
                    <button
                        onClick={(e) => toggleModal(e)}
                        className="button button-logout"
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
        </div>
      ) : (
        <div className={!menu ? "navbar-items" : "navbar-items__show"}>
          <ul>
            <li>
              <Link className="navbar-item__link" to="/surveys">
                Formularios
              </Link>
            </li>
            <li>
              <Link className="navbar-item__link start-btn" to="/auth">
                Comenzar
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Modal show={show} toggle={toggleModal}>
        <h1 className="title-logout">¿Seguro quieres Cerrar Sesión?</h1>
        <div className="navbar-logout__buttons">
            <button className="button-effect-one-red navbar-cancel__button" onClick={e => toggleModal(e)}>Cancelar</button>
            <button className="button-effect-one navbar-logout__button" onClick={() => logOut()}>Aceptar</button>
        </div>
      </Modal>
    </>
  );
}
