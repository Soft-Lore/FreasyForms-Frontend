import React from "react";

export default function SurveyComponent({img, author, title, description, date, cls}) {
  return (
    <div className={"card " + cls}>
      <div className="card-img">
        <img src={img} alt={"survey-" + title} />
      </div>
      <div className="card-author">
        <span className="author-name">@{author}</span>
      </div>
      <div className="card-info">
        <h2 className="card-info__title">{title}</h2>
        <p className="card-info__description">
          {description}
        </p>
      </div>
      <div className="card-footer">
        <span className="counter">{date}</span>
        <button className="survey-btn">
          <span>Ver Encuesta</span>
        </button>
      </div>
    </div>
  );
}
