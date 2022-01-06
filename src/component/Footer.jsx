import React from "react";

const Footer = () => {
  return (
    <div className="footer w-100 bg-warning ">
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold text-white text-decoration-none">
                Company name
              </h6>
              <img
                class="w-100 text-center"
                src="/assets/img/upreal.png"
                alt=""
                width="100%"
              />
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold text-white">
                Products
              </h6>
              <p>
                <a class="text-white text-decoration-none">MDBootstrap</a>
              </p>
              <p>
                <a class="text-white text-decoration-none">MDWordPress</a>
              </p>
              <p>
                <a class="text-white text-decoration-none">BrandFlow</a>
              </p>
              <p>
                <a class="text-white text-decoration-none">Bootstrap Angular</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold text-white">
                Useful links
              </h6>
              <p>
                <a class="text-white text-decoration-none">Your Account</a>
              </p>
              <p>
                <a class="text-white text-decoration-none">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a class="text-white text-decoration-none">Shipping Rates</a>
              </p>
              <p>
                <a class="text-white text-decoration-none">Help</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold text-white">
                Contact
              </h6>
              <p>
                <i class="fas fa-home mr-3 text-white"></i> New York, NY 10012,
                US
              </p>
              <p>
                <i class="fas fa-envelope mr-3 text-white"></i> info@gmail.com
              </p>
              <p>
                <i class="fas fa-phone mr-3 text-white"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3 text-white"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </section>

        <hr class="my-3" />

        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <div class="p-3 text-white">
                © 2020 Copyright:
                <a
                  class="text-white text-decoration-none"
                  href="https://mdbootstrap.com/"
                >
                  MDBootstrap.com
                </a>
              </div>
            </div>

            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                class="btn btn-outline-light btn-floating m-1"
                class="text-white"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                class="text-white"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                class="text-white"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                class="text-white"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
