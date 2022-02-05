import React from "react";
import SectionBlogOne from "./SectionBlogOne";
import Service from "./Service";

const Home = () => {
  return (
    <div classNameName="homepage ">
      <div className="container-fluid p-md-5">
        <div className="">
          <div className=" row flex-center">
            {/* <div className="col-sm-6">
            <div className="card-body">
              <h1 className="card-title">Selamat datang di UPREAL</h1>
              <p className="card-text">
                Upreal menyediakan banyak jasa yang dapat di pilih sesuai yang
                di butuhkan konsumen. Jika anda ingin meneruskan bisa klik I'm
                Order.
              </p>
              <a href="#" className="btn btn-primary">
                I'm Order
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body d-flex justify-content-center">
              <img src="/assets/img/home/baner.svg" alt="" width="70%" />
            </div>
          </div> */}
            <div class="col-sm-6 order-md-1 ">
              <div className=" w-100">
                <div className="d-flex justify-content-center">
                  <img
                    class="img-fluid "
                    src="/assets/img/home/baner.svg"
                    alt=""
                    width="70%"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-7 col-lg-6 text-center text-md-start d-flex align-items-center">
              <div className="container w-75">
                <h1 class="fw-medium">
                  Butuh desain ?<br />
                  <span class="fw-bold">Upreal</span> adalah solusinya.
                </h1>
                <p class="mt-3 mb-4">
                  <span class="fw-medium">Upreal </span> menyediakan banyak jasa
                  yang dapat di pilih sesuai yang di butuhkan konsumen. Jika
                  anda ingin meneruskan bisa klik I'm Order.{" "}
                </p>
                <a
                  class="btn btn-lg btn-danger hover-top btn-glow"
                  href="#layanan"
                >
                  I'm Order{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionBlogOne />
      <Service />
    </div>
  );
};

export default Home;
