import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
);

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      //  nextArrow: <SampleNextArrow />,
      //  prevArrow: <SamplePrevArrow />,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings} className="arr">
          <div>
            <div className="m-1 bg-warning">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                1
              </h3>
            </div>
          </div>
          <div>
            <div className="m-1">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                2
              </h3>
            </div>
          </div>
          <div>
            <div className="m-1">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                3
              </h3>
            </div>
          </div>
          <div>
            <div className="m-1">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                4
              </h3>
            </div>
          </div>
          <div>
            <div className="m-1">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                5
              </h3>
            </div>
          </div>
          <div>
            <div className="m-1">
              <h3 className="d-flex justify-content-center bg-white shadow-sm p-3 rounded">
                6
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
