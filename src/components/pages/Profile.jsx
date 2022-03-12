import React from 'react';
import { AiFillCamera } from 'react-icons/ai'

export default function Profile() {
  return (
    <div className="profile-container center-container">
      <div className="profile-content content-center">
          <div className="profile-header">
              <div className="edit-img__container">
                  <div className="edit-img__content">
                      <img src="https://i.pinimg.com/736x/ce/77/2e/ce772e312499ecec5057c4ac09c4dbbd.jpg" alt="profile" className="img-profile__edit" />
                  </div>
                  <div className="icon-camara__container">
                      <AiFillCamera className='camara-icon' />
                  </div>
              </div>
              <div className="username-container">
                  <span className="username">
                      @BaBuni69
                  </span>
              </div>
          </div>
          <form className="form-profile">
              <label for="name" className="label-form">Nombre</label>
              <input className="input-auth input profile-input" placeholder="Nombre" />
              <label for="email" className="label-form">Correo</label>
              <input className="input-auth input profile-input" type="email" placeholder="Correo electronico" />
              <div className="row-side">
                  <div className="left-side">
                      <label for="password" className="label-form">Contraseña</label>
                      <input className="input-auth input profile-input" type="password" placeholder="Contraseña" />
                  </div>
                  <div className="right-side">
                      <label for="password" className="label-form">Confirmar</label>
                      <input className="input-auth input profile-input" type="password" placeholder="Confirmar contraseña" />
                  </div>
              </div>
              <button type="submit" className="button button-effect-one profile-btn">Actualizar</button>
          </form>
      </div>
  </div>
  )
}
