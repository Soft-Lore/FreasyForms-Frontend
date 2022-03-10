import React  from "react";
import { SurveyComponent } from "../atoms/index";
import { surveys } from "../fakeSurveys";
import { useSlider } from "../hooks";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ContainerSurveys() {
  const { index, toggleNext, toggleBack } = useSlider(surveys.length);
 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
         slidesToShow: 4,
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
         slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
         slidesToShow: 1,
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
                surveys.map((survey, i) => (
                  <SurveyComponent
                    img={survey.img}
                    author={survey.author}
                    description={survey.description}
                    title={survey.title}
                    date={survey.date}
                    key={survey.id}
                    // cls={i - 1 && 'card-focus__left' && i + 1 && 'card-focus__right'}
                  />
                ))}
       </Slider>
      </div>
    </section>
  );
}
