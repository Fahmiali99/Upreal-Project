import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <div className="card d-flex align-items-center">
              <h3>1</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>2</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>3</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>4</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>5</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>6</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>7</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>8</h3>
            </div>
          </div>
          <div>
            <div className="card d-flex align-items-center">
              <h3>9</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
