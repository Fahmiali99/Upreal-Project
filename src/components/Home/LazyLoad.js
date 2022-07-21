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
export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      speed: 2000,
      pauseOnHover: true,
      autoplay: true,

      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    return (
      <div className="container ">
        <div className="container">
          <div className="container-fluid pb-5 dekstop-mobile">
            <div className="text-center title-konsumen-two">
              <div className="mt-4 mb-4">
                <h2>Tanggapan Pelanggan</h2>
                <p>
                  Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
                  ditempatkan untuk .
                </p>
              </div>
            </div>
            <Slider {...settings} className="arr ">
              <div>
                <div className="m-2">
                  <div className="container card">
                    <div className="d-flex justify-content-center">
                      <img
                        className="rounded-circle mt-2"
                        src="https://yt3.ggpht.com/ytc/AKedOLTTSddmm3jeJC0tgeOEUcFpMAe1Dy4DeuwpNLPfpw=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        width="20%"
                      />
                    </div>
                    <div className="container text-center mt-2">
                      <h4>Fahmi Ali Husni</h4>
                      <div className="d-flex justify-content-center">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                        yang ditempatkan untuk mendemostrasikan elemen grafis
                        atau presentasi visual seperti font, tipografi, dan tata
                        letak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <div className="container card">
                    <div className="d-flex justify-content-center">
                      <img
                        className="rounded-circle mt-2"
                        src="https://yt3.ggpht.com/ytc/AKedOLTTSddmm3jeJC0tgeOEUcFpMAe1Dy4DeuwpNLPfpw=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        width="20%"
                      />
                    </div>
                    <div className="container text-center mt-2">
                      <h4>Fahmi Ali Husni</h4>
                      <div className="d-flex justify-content-center">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                        yang ditempatkan untuk mendemostrasikan elemen grafis
                        atau presentasi visual seperti font, tipografi, dan tata
                        letak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <div className="container card">
                    <div className="d-flex justify-content-center">
                      <img
                        className="rounded-circle mt-2"
                        src="https://yt3.ggpht.com/ytc/AKedOLTTSddmm3jeJC0tgeOEUcFpMAe1Dy4DeuwpNLPfpw=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        width="20%"
                      />
                    </div>
                    <div className="container text-center mt-2">
                      <h4>Fahmi Ali Husni</h4>
                      <div className="d-flex justify-content-center">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                        yang ditempatkan untuk mendemostrasikan elemen grafis
                        atau presentasi visual seperti font, tipografi, dan tata
                        letak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <div className="container card">
                    <div className="d-flex justify-content-center">
                      <img
                        className="rounded-circle mt-2"
                        src="https://yt3.ggpht.com/ytc/AKedOLTTSddmm3jeJC0tgeOEUcFpMAe1Dy4DeuwpNLPfpw=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        width="20%"
                      />
                    </div>
                    <div className="container text-center mt-2">
                      <h4>Fahmi Ali Husni</h4>
                      <div className="d-flex justify-content-center">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                        yang ditempatkan untuk mendemostrasikan elemen grafis
                        atau presentasi visual seperti font, tipografi, dan tata
                        letak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <div className="container card">
                    <div className="d-flex justify-content-center">
                      <img
                        className="rounded-circle mt-2"
                        src="https://yt3.ggpht.com/ytc/AKedOLTTSddmm3jeJC0tgeOEUcFpMAe1Dy4DeuwpNLPfpw=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        width="20%"
                      />
                    </div>
                    <div className="container text-center mt-2">
                      <h4>Fahmi Ali Husni</h4>
                      <div className="d-flex justify-content-center">
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          class="bi bi-star-fill"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FEA250"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                        yang ditempatkan untuk mendemostrasikan elemen grafis
                        atau presentasi visual seperti font, tipografi, dan tata
                        letak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
