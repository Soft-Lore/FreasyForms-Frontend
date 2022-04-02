import React from "react";
import { SurveyComponent } from "../atoms/index";
import { surveys } from "../fakeSurveys";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ContainerSurveys() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="cards-container">
      <div className="cards-content">
        <div className="category-name__container">
          <span className="category-name">Populares</span>
        </div>
        <Slider {...settings}>
          {surveys &&
            surveys.map((survey, index) => (
              <SurveyComponent
                img={survey.img}
                author={survey.author}
                description={survey.description}
                title={survey.title}
                date={survey.date}
                key={survey.id}
                cls={(index - 2) % 3 === 0 ? "card-focus__right" : index % 3 === 0 && "card-focus__left"}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
}
