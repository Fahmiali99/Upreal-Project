import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import peoplesatu from "../../assets/img/home/me.png";
import { Container, Image } from "react-bootstrap";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
);

const menu = [
  {
    id: 1,
    name: "Fahmi Ali",
    story:
      "Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.",
    image: peoplesatu,
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    story:
      "Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.",
    image: peoplesatu,
  },
  {
    id: 3,
    name: "Budi Rudi",
    story:
      "Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.",
    image: peoplesatu,
  },
  {
    id: 4,
    name: "Yudi Uwi",
    story:
      "Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.",
    image: peoplesatu,
  },
];

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
      <div className="w-100 d-flex justify-content-center">
        <Container>
          <div className="dekstop-carousel mt-5 mb-5 pt-5 pb-5">
            <div className="text-center title-konsumen">
              <div className="w-75">
                <h2 className="text-light">Tanggapan Pelanggan</h2>
                <p className="text-light">
                  Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
                  ditempatkan untuk mendemostrasikan elemen grafis atau
                  presentasi visual seperti font, tipografi, dan tata letak.
                </p>
              </div>
            </div>

            <Slider {...settings} className="arr mt-5 mb-5 pt-4 pb-4">
              {menu.map((item) => (
                <div key={item.id}>
                  <div className="m-2">
                    <Container className=" card">
                      <div className="d-flex justify-content-center">
                        <Image
                          className="rounded-circle mt-2"
                          src={item.image}
                          alt=""
                          width="20%"
                        />
                      </div>
                      <Container className=" text-center mt-2">
                        <h4>{item.name}</h4>
                        <div className="d-flex justify-content-center">
                          <svg
                            className="bi bi-star-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FEA250"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            className="bi bi-star-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FEA250"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            className="bi bi-star-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FEA250"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            className="bi bi-star-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FEA250"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            className="bi bi-star-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#FEA250"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </div>
                        <p className="mt-2">{item.story}</p>
                      </Container>
                    </Container>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
