import React from "react";
import { FiMoreVertical } from 'react-icons/fi'

export default function QuestionOpenSurvey() {
  return (
    <div class="survey-question">
      <div class="survey-header">
        <input
          class="question"
          type="text"
          name="survey-question"
          id="survey-question"
          placeholder="Pregunta..."
        />
        <div class="survey-menu">
          <FiMoreVertical />
          <ul class="dropdown-survey__menu">
            <li data-option="editar">
              <span>Editar</span>
            </li>
            <li data-option="eliminar">
              <span>Eliminar</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="survey-body">
        <div class="answer-survey">
          <input
            class="text-answer"
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
