import React from "react";

export default function InputOption({name}) {
  return (
    <div className="answer-survey sselected-answer">
      <input className="option-answer" type="radio" name="answer" />
      <label className="option-label" htmlFor="answer" >
        {name}
      </label>
    </div>
  );
}
