import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "antd";
import Slider from "react-slick";
import classNames from "classnames";
import "./index.css";

import { NextArrow, PrevArrow } from "../../other/SliderArrow";

function HeroSliderOne({ data }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  return (
    <div className="hero-slider -carousel -style-one">
      <Slider
        beforeChange={beforeChange}
        className="arrow-center"
        {...settings}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`slick-slider-item ${classNames({
              active: index === currentSlideIndex,
            })}`}
          >
            <div className="hero-slider-background">
              <img src={item} alt="Hero slider background" />
            </div>
            <div className="hero-slider-content-wrapper">
              <Row align="middle" gutter={30}>
                <Col sm={12}></Col>
              </Row>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(HeroSliderOne);
