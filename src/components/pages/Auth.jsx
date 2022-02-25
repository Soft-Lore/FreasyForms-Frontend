import React from 'react';
import image from '../../assets/login-image.png'
import logo from '../../assets/logo.jpg'
import { Footer } from '../organisms/index'
import { Modal } from '../moleculs/index'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'
import { useUser, useModal } from '../hooks/index';

export default function Auth() {
  const {show, toggleModal} = useModal()
  const {login} = useUser()

  return (
    <>
      <div className="container">
        <div className="signup-img">
            <img src={image} alt="signup" />
        </div>
        <div className="signup">
            <div className="signup-welcome">
                <div className="signup-titles">
                    <img src={logo} alt="logo" className='auth-logo' />
                    <p className="title1">
                        Crea encuestas y
                        <br />
                        formularios GRATIS
                    </p>
                    <p className="title2">Registrate en FreesyForms.</p>
                </div>
            </div>
            <div className="form-container">
                <form className="signup-form">
                    <input autoComplete='off' className='input-auth input' type="text" placeholder="Nombre" name="name" />
                    <input className='input-auth input' type="email" placeholder="Correo electronico" name="email"/>
                    <input className='input-auth input' type="password" placeholder="Contraseña" name="password"/>
                    <input className='input-auth input' type="password" placeholder="Confirmar contraseña" name="password"/>
                    <button className="button button-effect-one singup-btn" type="button" onClick={() => login()}>
                      Registrarse
                    </button>
                    <div className='auth-other__options'>
                      <p className='signup-form__or'>or</p>
                      <div>
                        <AiFillGoogleCircle className='auth-method__register google'/>
                        <AiFillFacebook className='auth-method__register facebook'/>
                      </div>
                    </div>
                    <p className='signup-question'>¿Ya tienes una cuenta?</p>
                    <button className="button button-effect-two login-button" type="button" onClick={e => toggleModal(e)}>Iniciar sesion</button>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    <Modal show={show} toggle={toggleModal}>
      <h2 className='title1'>Iniciar sesion</h2>
      <form className="login-form">
          <input className='input-auth input login-form__input' type="email" placeholder="Usuario o Correo electronico" name="useremail"/>
          <input className='input-auth input login-form__input' type="password" placeholder="Contraseña" name="password"/>
          <button className="button button-effect-one login-button" onClick={() => login()}>Iniciar sesion</button>
          <p>¿Has olvidado la contraseña?</p>
      </form>
    </Modal>
    </>
  )
}
