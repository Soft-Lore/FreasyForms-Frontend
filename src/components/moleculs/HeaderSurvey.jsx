import React from "react";
import { BiWorld } from "react-icons/bi";
import profile from "../../assets/snk-titan-steven.png";

export default function HeaderSurvey({survey}) {
  return (
    <div class="survey-content__info content-center">
      <div class="survey-header__info">
        <div class="user-side">
          <div class="img-user__container">
            <div class="img-user__content">
              <img src={profile} alt="img-user" class="img-user" />
            </div>
          </div>
          <span class="username info__username">@{survey.author}</span>
          <div class="privacy-content">
            <span class="privacy">{survey.privacity}</span>
            <BiWorld />
          </div>
        </div>
        <div class="info-side">
          <h2 class="survey-title survey-info__title">{survey.title}</h2>
          <p class="survey-description survey-info__description">
            {survey.description}
          </p>
          <div class="date-content">
            <span class="create-date">{survey.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
