import React from "react";
import { FiMoreVertical } from 'react-icons/fi'

export default function QuestionOpenSurvey() {
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
          <input
            className="text-answer"
            type="text"
            name="answer"
            id="answer"
            placeholder="Escribir respuesta..."
          />
        </div>
      </div>
    </div>
  );
}
