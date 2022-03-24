import React from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function QuestionSurvey({
  removeQuestion,
  question,
  children,
  ...rest
}) {
  return (
    <div className="survey-question">
      <div className="survey-header">
        <input
          className="question"
          type="text"
          placeholder="Pregunta..."
          {...rest}
        />
        <div className="survey-menu">
          <FiMoreVertical />
          <input type="checkbox" className="survey-menu__checkbox" />
          <ul className="dropdown-survey__menu">
            <li
              data-option="eliminar"
              onClick={() => removeQuestion(question.i)}
            >
              <span>Eliminar</span>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
