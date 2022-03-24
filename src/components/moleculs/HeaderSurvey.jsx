import React from "react";
import { BiWorld } from "react-icons/bi";
import profile from "../../assets/snk-titan-steven.png";

export default function HeaderSurvey({survey}) {
  return (
    <div className="survey-content__info content-center">
      <div className="survey-header__info">
        <div className="user-side">
          <div className="img-user__container">
            <div className="img-user__content">
              <img src={profile} alt="img-user" className="img-user" />
            </div>
          </div>
          <span className="username info__username">@{survey.author}</span>
          <div className="privacy-content">
            <span className="privacy">{survey.privacity}</span>
            <BiWorld />
          </div>
        </div>
        <div className="info-side">
          <h2 className="survey-title survey-info__title">{survey.title}</h2>
          <p className="survey-description survey-info__description">
            {survey.description}
          </p>
          <div className="date-content">
            <span className="create-date">{survey.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
