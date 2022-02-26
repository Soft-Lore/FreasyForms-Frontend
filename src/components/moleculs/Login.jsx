import React from "react";
import { Modal } from "../moleculs/index";
import { useUser } from "../hooks/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../services/validates/auth";
import { MessageError } from "../atoms/index";

export default function Login({ show, toggleModal }) {
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    login();
  };

  return (
    <Modal show={show} toggle={toggleModal}>
      <h2 className="title1">Iniciar sesion</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-auth input login-form__input"
          type="email"
          placeholder="Usuario o Correo electronico"
          {...register("name")}
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
