import React from "react";

export default function InputOption({name}) {
  return (
    <div class="answer-survey sselected-answer">
      <input class="option-answer" type="radio" name="answer" />
      <label class="option-label" htmlFor="answer" >
        {name}
      </label>
    </div>
  );
}
