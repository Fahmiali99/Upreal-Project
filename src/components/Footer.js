import React from "react";

const Footer = () => {
  return (
    <div className="footer w-100 bg-dark  ">
      <div className="container-fluid w-100 d-flex justify-content-center mt-5 mb-1">
        <div className=" col-10 pb-0">
          <section className="">
            <div className="row g-0">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                  <h4 className="text-white">Company name</h4>
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
                  <h4 className="text-white">Products</h4>
                </h6>
                <p>
                  <a className="text-white text-decoration-none sub-footer">
                    <p className="sub-footer">Logo Design</p>
                  </a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    <p className="sub-footer">Flyer design</p>
                  </a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    <p className="sub-footer">Poster design</p>
                  </a>
                </p>
                <p>
                  <a className="text-white text-decoration-none">
                    <p className="sub-footer">Instagram feed design</p>
                  </a>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h4 className="text-white">About</h4>
                </h6>
                <p>
                  <a className="text-white text-decoration-none">
                    <p className="sub-footer">
                      Anda dapat menemukan banyak jasa di sini
                    </p>
                  </a>
                </p>
              </div>

              <hr className="w-100 bg-secondary   d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                  <h4 className="text-white">Contact</h4>
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
                  <h3 className="text-white">Subscribe</h3>

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
                  <i className="fab fa-instagram mr-2 icon-media-footer"></i>
                </a>
                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f mr-2 icon-media-footer"></i>
                </a>

                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                >
                  <i className="fab fa-twitter mr-2 icon-media-footer"></i>
                </a>

                <a
                  className="btn btn-floating m-1 border-0 text-white"
                  role="button"
                >
                  <i className="fab fa-google mr-2 icon-media-footer"></i>
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
