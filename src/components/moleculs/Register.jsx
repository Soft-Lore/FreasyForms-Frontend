import React from "react";
import image from "../../assets/login-image.png";
import logo from "../../assets/logo.jpg";
import { MessageError } from "../atoms/index";
import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../services/validates/auth";
import { useUser } from "../hooks/index";

export default function Register({ toggleModal }) {
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    login();
  };

  return (
    <div className="container">
      <div className="signup-img">
        <img src={image} alt="signup" />
      </div>
      <div className="signup">
        <div className="signup-welcome">
          <div className="signup-titles">
            <img src={logo} alt="logo" className="auth-logo" />
            <p className="title1">
              Crea encuestas y
              <br />
              formularios GRATIS
            </p>
            <p className="title2">Registrate en FreesyForms.</p>
          </div>
        </div>
        <div className="form-container">
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              autoComplete="off"
              className="input-auth input"
              type="text"
              placeholder="Nombre"
            />
            <MessageError error={errors?.name?.message} />
            <input
              {...register("email")}
              className="input-auth input"
              type="email"
              placeholder="Correo electronico"
            />
            <MessageError error={errors?.email?.message} />
            <input
              {...register("password")}
              className="input-auth input"
              type="password"
              placeholder="Contraseña"
            />
            <MessageError error={errors?.password?.message} />
            <input
              {...register("passwordConfirm")}
              className="input-auth input"
              type="password"
              placeholder="Confirmar contraseña"
            />
            <MessageError error={errors?.passwordConfirm?.message} />
            <button
              type="submit"
              className="button button-effect-one singup-btn"
            >
              Registrarse
            </button>
            <div className="auth-other__options">
              <p className="signup-form__or">or</p>
              <div>
                <AiFillGoogleCircle className="auth-method__register google" />
                <AiFillFacebook className="auth-method__register facebook" />
              </div>
            </div>
            <p className="signup-question">¿Ya tienes una cuenta?</p>
            <button
              className="button button-effect-two login-button"
              type="button"
              onClick={(e) => toggleModal(e)}
            >
              Iniciar sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
