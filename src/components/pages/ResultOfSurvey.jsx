import React from "react";
import {NavBarSurvey} from '../moleculs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useGraphics } from '../hooks'
import { Doughnut } from 'react-chartjs-2'

export default function ResultOfSurvey() {
  const survey = [
    {
      name: 'Mi pregunta',
      options: [{option: "1", rate: 3, option: "2", rate: 1, option: "3", rate: 4,}],
    },
    {
      name: 'Mi pregunta',
      options: [{option: "1", rate: 3, option: "2", rate: 1, option: "3", rate: 4,}],
    },
    {
      name: 'Mi pregunta',
      options: [{option: "1", rate: 3, option: "2", rate: 1, option: "3", rate: 4,}],
    }
  ]
  const data = useGraphics(survey)

  console.log(data)
  return (
    <>
     <NavBarSurvey />
      <div className="survey-results__cotainer center-container">
        <div className="survey-results__content content-center">
          <div className="survey-title__container">
            <h2 className="survey-title">Titulo de la encuesta</h2>
          </div>
          <div className="survey-question">
            <div className="survey-header">
              <h3 className="question">1. Pregunta</h3>
            </div>
          </div>
          <div className="survey-question">
            <div className="survey-header">
              <h3 className="question">2. Pregunta</h3>
            </div>
          </div>
          <div className="survey-question">
            <div className="survey-header">
              <h3 className="question">3. Pregunta</h3>
            </div>
          </div>
          <div className="survey-question">
            <div className="survey-header">
              <h3 className="question">4. Pregunta</h3>
            </div>
            <div className="open-answer">
              <input type="checkbox" className="collapse-content__checkbox" />
              <p className="answer-paragraph">
              1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate illo quos accusantium laudantium laborum quod eaque
                natus reiciendis dolores dolor doloribus, dignissimos ea
                eveniet. Voluptatem, aspernatur. Voluptate, facere laudantium?
                Fugit blanditiis natus similique nisi nihil autem quas modi?
                Voluptatem ad nisi assumenda reprehenderit sapiente, neque sint
                ipsam hic possimus. Magnam!
              </p>
              <RiArrowDropDownLine className="icon-collapse__content" />
            </div>
            <div className="open-answer">
              <input type="checkbox" className="collapse-content__checkbox" />
              <p className="answer-paragraph">
              2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate illo quos accusantium laudantium laborum quod eaque
                natus reiciendis dolores dolor doloribus, dignissimos ea
                eveniet. Voluptatem, aspernatur. Voluptate, facere laudantium?
                Fugit blanditiis natus similique nisi nihil autem quas modi?
                Voluptatem ad nisi assumenda reprehenderit sapiente, neque sint
                ipsam hic possimus. Magnam!
              </p>
              <RiArrowDropDownLine className="icon-collapse__content" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
