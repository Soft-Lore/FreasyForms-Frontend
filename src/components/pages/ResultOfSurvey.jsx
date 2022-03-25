import React from "react";
import { NavBarSurvey } from "../moleculs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGraphics } from "../hooks";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultOfSurvey() {
  const data = useGraphics();

  const chartData = (index, resp, label) => ({
    labels: resp,
    datasets: [
      {
        label: label,
        data: data.datasets.data[index],
        backgroundColor: data.datasets.backgroundColor[index],
      },
    ],
  });

  return (
    <>
      <NavBarSurvey />
      <div className="survey-results__cotainer center-container">
        <div className="survey-results__content content-center">
          <div className="survey-title__container">
            <h2 className="survey-title">Titulo de la encuesta</h2>
          </div>
          {data.labels &&
            data.labels.map((resp, index) => (
              <div key={index * 33} className="graphic">
                <h3 className="title-result">{data.name[index]}</h3>
                <Doughnut
                  key={index}
                  data={chartData(index, resp, data.name[index])}
                  width={10}
                  height={5}
                  options={{ responsive: true }}
                />
              </div>
            ))}
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
