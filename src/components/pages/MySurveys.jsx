import React from "react";
import { surveys } from '../fakeSurveys'
import { SurveyComponent } from "../atoms";
import { useNavigate } from 'react-router-dom'

export default function MySurveys() {
  const navigate = useNavigate()

  return (
    <div className="surveys-container">
      <div className="surveys-content">
        <div className="add-survey__content" onClick={() => navigate('/create-survey')}>
          <div className="add-survey">
            <span className="plus-add">+</span>
          </div>
        </div>
        {
          surveys.map(survey => <SurveyComponent
            img={survey.img}
            author={survey.author}
            description={survey.description}
            title={survey.title}
            date={survey.date}
            key={survey.id}
            cls="mysurvey"
          />)
        }
      </div>
    </div>
  );
}
