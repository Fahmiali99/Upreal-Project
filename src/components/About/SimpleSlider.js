import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
    };
    return (
      <div className="container mt-5 mb-5 pb-4">
        <div className="text-center ">
          <Slider {...settings}>
            <div>
              <img
                src="https://cohive.space/sojuhanjan/wp-content/uploads/2019/12/Berbagai-Manfaat-Teamwork-yang-Membawa-Kemudahan-1200x675.jpeg"
                alt=""
                width="100%"
              />
            </div>
            <div>
              <img
                src="https://cohive.space/sojuhanjan/wp-content/uploads/2019/12/Berbagai-Manfaat-Teamwork-yang-Membawa-Kemudahan-1200x675.jpeg"
                alt=""
                width="100%"
              />
            </div>
            <div>
              <img
                src="https://cohive.space/sojuhanjan/wp-content/uploads/2019/12/Berbagai-Manfaat-Teamwork-yang-Membawa-Kemudahan-1200x675.jpeg"
                alt=""
                width="100%"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
