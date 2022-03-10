import React from "react";
import { Modal } from "../moleculs/index";
import { useUser } from "../hooks/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../services/validates/auth";
import { MessageError } from "../atoms/index";
import { useNavigate } from 'react-router-dom'

export default function Login({ show, toggleModal }) {
  const { login } = useUser();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  
  const onSubmit = (data) => {
    login();
    navigate('/')
  };

  return (
    <Modal show={show} toggle={toggleModal}>
      <h2 className="title1">Iniciar sesion</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-auth input login-form__input"
          type="email"
          placeholder="Usuario o Correo electronico"
          {...register("email")}
        />
         <MessageError error={errors?.email?.message} />
        <input
          className="input-auth input login-form__input"
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
         <MessageError error={errors?.password?.message} />
        <button
          className="button button-effect-one login-button"
          type="submit"
        >
          Iniciar sesion
        </button>
        <p className="login-password">¿Has olvidado la contraseña?</p>
      </form>
    </Modal>
  );
}
