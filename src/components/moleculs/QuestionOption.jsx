import React from "react";
import { IoIosRemove } from "react-icons/io";

export default function QuestionOption({
  option,
  removeOptionToQuestion,
  ...rest
}) {
  return (
    <div className="survey-body">
      <div className="answer-survey create-answer">
        <input className="option-answer" type="radio" />
        <input
          className="text-answer option"
          type="text"
          placeholder="Escribir option..."
          {...rest}
        />
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeOptionToQuestion(option.question, option.i)}
        >
          <IoIosRemove />
        </button>
      </div>
    </div>
  );
}
