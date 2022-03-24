import React from "react";
import { QuestionComponent, HeaderSurvey } from "../moleculs";

export default function Survey() {
  const survey = {
    title: "La vida loca",
    description: "Lo que sea panasonic ñlafdsjldskfjpowrqioruweiorew",
    author: "Steven",
    privacity: "public",
    date: "10-12-2021",
    questions: [
      {
        type: "options",
        name: "Pan favorito?",
        options: ["option 1", "opcion 2", "opcion 3"]
      },
      {
        type: "options",
        name: "vida Favorita",
        options: ["option 1", "opcion 2", "opcion 3"]
      },
      {
        type: "open",
        name: "pregunta lococa",
      },
      {
        type: "options",
        name: "lo que sea?",
        options: ["option 1", "opcion 2", "opcion 3"]
      },
    ]
  };
  return (
    <div class="survey-container__info center-container">
      <HeaderSurvey survey={survey}/>
      <div class="content-center">
        <div class="survey-title">
          <h2 class="survey-info__title message__title">
            Responder las siguientes preguntas:
          </h2>
        </div>
        {survey.questions.map((question, i) => (
          <QuestionComponent
            name={i + 1 +". " + question.name}
            options={question.options}
          />
        ))}
        <button type="button" class="button-effect-one survey-button">
          Enviar
        </button>
      </div>
    </div>
  );
}
