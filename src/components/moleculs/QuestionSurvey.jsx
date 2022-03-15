import React from "react";
import { FiMoreVertical } from 'react-icons/fi'
import { IoIosRemove } from 'react-icons/io'

export default function QuestionSurvey() {
  return (
    <div className="survey-question">
      <div className="survey-header">
        <input
          className="question"
          type="text"
          name="survey-question"
          id="survey-question"
          placeholder="Pregunta..."
        />
        <div className="survey-menu">
          <FiMoreVertical />
          <ul className="dropdown-survey__menu">
            <li data-option="editar">
              <span>Editar</span>
            </li>
            <li data-option="eliminar">
              <span>Eliminar</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="survey-body">
        <div className="answer-survey">
          <input className="option-answer" type="radio" name="answer" id="answer" />
          <label className="option-label">
            option 1
          </label>
          <button className="remove-btn">
              <IoIosRemove />
          </button>
        </div>
        <div className="answer-survey create-answer">
          <input className="option-answer" type="radio" name="answer" id="answer" />
          <input
            className="text-answer option"
            type="text"
            name="answer"
            id="answer"
            placeholder="Escribir option..."
          />
          <button className="remove-btn">
              <IoIosRemove />
          </button>
        </div>
      </div>
    </div>
  );
}
