import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

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
      speed: 2000,
      pauseOnHover: true,
      autoplay: true,

      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    return (
      <div className="container pb-5 dekstop-carousel">
        <Slider {...settings} className="arr">
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded ">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-1">
              <div className="bg-white shadow-sm rounded">
                <img
                  src="https://demokratis.co.id/wp-content/uploads/2021/03/AI.jpg"
                  width="100%"
                />
                <div className="p-2">
                  <h3>Artificial Intellegence</h3>
                  <p>lsdakdfsnaf</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
