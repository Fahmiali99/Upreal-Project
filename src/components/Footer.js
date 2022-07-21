import React from "react";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark  ">
      <div className="container-fluid col-md-10 w-100 d-flex justify-content-center mt-5 mb-1">
        <div className=" pb-0">
          <section className="">
            <div className="row g-0">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                  <h5 className="text-white">Company name</h5>
                </h6>
                <img
                  className="w-100 text-center"
                  src="/assets/img/upreal-white.png"
                  alt=" "
                  width="100%"
                />
              </div>

              <hr className="w-100 bg-secondary  d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white">Products</h5>
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
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white">About</h5>
                </h6>
                <p>
                  <p className="text-white text-decoration-none">
                    <p className="sub-footer">
                      Anda dapat menemukan banyak jasa di sini
                    </p>
                  </p>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h5 className="text-white">Contact</h5>
                </h6>
                <p className="text-white">
                  <p className="sub-footer">
                    <i className="fas fa-home mr-3 text-white"></i> Sumbersari,
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
                    <i className="fas fa-phone mr-3 text-white"></i>{" "}
                    +6281252188672
                  </p>
                </p>
                <div class=" mb-4 mb-md-0">
                  <form action="#" class="subscribe">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your e-mail"
                    />
                    <input
                      type="submit"
                      class="btn btn-submits text-white"
                      value="Send"
                    />
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

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
