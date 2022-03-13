import React from "react";
import {
  NavBarSurvey,
  QuestionOpenSurvey,
  QuestionSurvey,
  Modal,
} from "../moleculs";
import { MdAdd } from "react-icons/md";
import { useModal } from '../hooks'

export default function CreateSurvey() {
  const {show, toggleModal} = useModal()

  return (
    <>
      <NavBarSurvey />
      <form class="survey-container center-container">
        <div class="survey-content content-center">
          <div class="survey-title">
            <input
              type="text"
              name="survey-title"
              id="survey-title"
              placeholder="Titulo de la encuesta"
            />
          </div>
          <QuestionSurvey />
          <QuestionOpenSurvey />
        </div>
      </form>
        <button class="plus" onClick={() => toggleModal()}>
          <MdAdd />
        </button>
      <Modal show={show} toggle={toggleModal}>
        <div class="title-modal-content">
          <h2 class="title-modal">Selecciona el formato</h2>
        </div>
        <div class="modal-list">
          <select className="modal-list__select">
            <option>Seleccion multiple</option>
            <option>Pregunta Abierta</option>
          </select>
        </div>
      </Modal>
    </>
  );
}
