import React from "react";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark  ">
      <div className="container-fluid w-100 d-flex justify-content-center">
        <div className=" col-10 pb-0">
          <section className="">
            <div className="row g-0">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                  Company name
                </h6>
                <img
                  className="w-100 text-center"
                  src="/assets/img/upreal-white.png"
                  alt=""
                  width="100%"
                />
              </div>

              <hr className="w-100 bg-secondary  d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  Products
                </h6>
                <p>
                  <a className="text-white text-decoration-none">Logo Design</a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    Flyer design
                  </a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    Poster design
                  </a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    Instagram feed design
                  </a>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  About
                </h6>
                <p>
                  <a className="text-white text-decoration-none">
                    Anda dapat menemukan banyak jasa di sini
                  </a>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  Contact
                </h6>
                <p className="text-white">
                  <i className="fas fa-home mr-3 text-white"></i> Sumbersari,
                  Jember
                </p>
                <p className="text-white">
                  <i className="fas fa-envelope mr-3 text-white"></i>
                  mekkipatria@gmail.com
                </p>
                <p className="text-white">
                  <i className="fas fa-phone mr-3 text-white"></i>{" "}
                  +6281252188672
                </p>
                <div class=" mb-4 mb-md-0">
                  <h3>Subscribe</h3>
                  <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque dolor ducimus doloremque earum ullam. Architecto
                    voluptatum odio magni.
                  </p>
                  <form action="#" class="subscribe">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your e-mail"
                    />
                    <input type="submit" class="btn btn-submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-3 bg-secondary " />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3 text-white">
                  © 2021 Copyright:
                  <a
                    className="text-white text-decoration-none"
                    href="https://fahmiali.netlify.app/"
                  >
                    FAL
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                  href="https://www.instagram.com/uprealhomecreative/"
                >
                  <i className="fab fa-instagram mr-2"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f mr-2"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                >
                  <i className="fab fa-twitter mr-2"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                >
                  <i className="fab fa-google mr-2"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
