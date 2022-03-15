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

  const createQuestion = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <NavBarSurvey />
      <form className="survey-container center-container">
        <div className="survey-content content-center">
          <div className="survey-title">
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
        <button className="plus" onClick={() => toggleModal()}>
          <MdAdd />
        </button>
      <Modal show={show} toggle={toggleModal}>
        <div className="title-modal-content">
          <h2 className="title-modal">Selecciona el formato</h2>
        </div>
        <div className="modal-list">
          <select className="modal-list__select" onChange={(e) => createQuestion(e)}>
            <option value="options">Seleccion multiple</option>
            <option value="open">Pregunta Abierta</option>
          </select>
        </div>
      </Modal>
    </>
  );
}
