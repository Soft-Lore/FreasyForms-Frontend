import React from "react";
import { FiMoreVertical } from 'react-icons/fi'
import { IoIosRemove } from 'react-icons/io'

export default function QuestionSurvey() {
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
          <input class="option-answer" type="radio" name="answer" id="answer" />
          <label class="option-label" for="answer">
            option 1
          </label>
          <button class="remove-btn">
              <IoIosRemove />
          </button>
        </div>
        <div class="answer-survey create-answer">
          <input class="option-answer" type="radio" name="answer" id="answer" />
          <input
            class="text-answer option"
            type="text"
            name="answer"
            id="answer"
            placeholder="Escribir option..."
          />
          <button class="remove-btn">
              <IoIosRemove />
          </button>
        </div>
      </div>
    </div>
  );
}
