import React from "react";
import {
  NavBarSurvey,
  QuestionOption,
  QuestionSurvey,
  Modal,
} from "../moleculs";
import { MessageError } from "../atoms";
import { MdAdd } from "react-icons/md";
import { useModal, useSurvey } from "../hooks";
import { FaEye, FaSave } from "react-icons/fa";

export default function CreateSurvey() {
  const { show, toggleModal } = useModal();
  const {
    survey,
    error,
    handleSubmit,
    createQuestion,
    addOptionToQuestion,
    handleInput,
    handleInputQuestion,
    handleInputOption,
    removeOptionToQuestion,
    removeQuestion,
  } = useSurvey(toggleModal);

  return (
    <>
      <form
        className="survey-container center-container"
        onSubmit={(e) => handleSubmit(e)}
      >
        <NavBarSurvey>
          <button className="nav-survey__btn preview-btn">
            <span>Vista previa</span>
            <FaEye />
          </button>
          <button type="submit" className="nav-survey__btn save-btn">
            <span>Guardar</span>
            <FaSave />
          </button>
        </NavBarSurvey>
        <div className="survey-content content-center">
          <div className="survey-title">
            <input
              type="text"
              placeholder="Titulo de la encuesta"
              name="name"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="survey-description">
            <textarea name="description" placeholder="Descripcion de la encuesta" onChange={(e) => handleInput(e)} />
          </div>
          {survey.questions.length > 0 ? (
            <>
              {survey.questions.map((question) => (
                <QuestionSurvey
                  key={question.i}
                  onChange={(e) => handleInputQuestion(e, question.i)}
                  question={question}
                  removeQuestion={removeQuestion}
                >
                  {/* If question type === options */}
                  {question.type === "options" && (
                    <>
                      {question.options.map((option, i) => (
                        <QuestionOption
                          key={i}
                          option={option}
                          value={option.name}
                          onChange={(e) =>
                            handleInputOption(e, i, option.question)
                          }
                          removeOptionToQuestion={removeOptionToQuestion}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => addOptionToQuestion(question.i)}
                        className="button button-effect-one add-option__button"
                      >
                        Nueva opción
                      </button>
                    </>
                  )}
                </QuestionSurvey>
              ))}
            </>
          ) : (
            <button
              type="button"
              className="button button-effect-one create-survey__button"
              onClick={() => toggleModal()}
            >
              Añadir preguntas
            </button>
          )}
        {error && <MessageError error={error} center/>}
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
          <select
            className="modal-list__select"
            defaultValue="none"
            onChange={(e) => createQuestion(e)}
          >
            <option disabled name="default" value="none">
              ----Seleccione una opcion----
            </option>
            <option value="options">Seleccion multiple</option>
            <option value="open">Pregunta Abierta</option>
          </select>
        </div>
      </Modal>
    </>
  );
}
