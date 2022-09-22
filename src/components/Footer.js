import React from "react";
import { Col, Image, Row, Container } from "react-bootstrap";
import logo from "../assets/images/upreal-white.png";

const Footer = () => {
  return (
    <div className="footer w-100">
      <Container className=" d-flex justify-content-center mt-5 mb-1">
        <div className=" pb-0">
          <Row className=" g-0">
            <Col md={4} lg={3} xl={4} className=" mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                <h5 className="text-white font-montserrat">Company name</h5>
              </h6>
              <Image
                className="w-100 text-center"
                src={logo}
                alt=" "
                width="100%"
              />
            </Col>

            <hr className="w-100 bg-light h-px d-md-none" />

            <Col md={4} lg={3} xl={2} className=" mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                <h5 className="text-white font-montserrat">Products</h5>
              </h6>
              <p>
                <a
                  className="text-white text-decoration-none sub-footer"
                  href="/"
                >
                  <p className="sub-footer">Logo Design</p>
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="/">
                  <p className="sub-footer">Flyer design</p>
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="/">
                  <p className="sub-footer">Poster design</p>
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="/">
                  <p className="sub-footer">Instagram feed design</p>
                </a>
              </p>
            </Col>

            <hr className="w-100 bg-light h-px d-md-none" />

            <Col md={4} lg={3} xl={2} className=" mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                <h5 className="text-white font-montserrat">About</h5>
              </h6>
              <p>
                <p className="text-white text-decoration-none">
                  <p className="sub-footer">
                    Anda dapat menemukan banyak jasa di sini
                  </p>
                </p>
              </p>
            </Col>

            <hr className="w-100 bg-light h-px d-md-none" />

            <Col md={4} lg={3} xl={3} className=" mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                <h5 className="text-white font-montserrat">Contact</h5>
              </h6>
              <p className="text-white">
                <p className="sub-footer">
                  <i className="fas fa-home mr-3 text-white"></i>Sumbersari,
                  Jember
                </p>
              </p>
              <p className="text-white">
                <p className="sub-footer">
                  <i className="fas fa-envelope mr-3 text-white"></i>
                  mekkipatria@gmail.com
                </p>
              </p>
              <p className="text-white">
                <p className="sub-footer">
                  <i className="fas fa-phone mr-3 text-white"></i>+6281252188672
                </p>
              </p>
              <div className=" mb-4 mb-md-0">
                <form action="#" className="subscribe ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your e-mail"
                  />
                  <button className=" bg-indigo-700 w-25 h-9 rounded text-light font-montserrat absolute top-2 right-2 ">
                    Send
                  </button>
                </form>
              </div>
            </Col>
          </Row>

          <hr className="my-3 bg-light h-px " />

          <Container className=" pt-0 pb-2">
            <Row className=" d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className=" text-white">
                  © 2021 Copyright:
                  <a
                    className="text-white text-decoration-none"
                    href="https://fahmiali.vercel.app/"
                  >
                    FAL
                  </a>
                </div>
              </div>

              <Col className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                  href="https://www.instagram.com/uprealhomecreative/"
                >
                  <i className="fab fa-instagram  icon-media-footer"></i>
                </a>
                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  href="/"
                  role="button"
                >
                  <i className="fab fa-facebook-f icon-media-footer"></i>
                </a>

                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                  href="/"
                >
                  <i className="fab fa-twitter icon-media-footer"></i>
                </a>

                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                  href="/"
                >
                  <i className="fab fa-google icon-media-footer"></i>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
