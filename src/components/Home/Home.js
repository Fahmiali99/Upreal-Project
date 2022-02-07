import React from "react";
import CustomArrows from "./CustomArrows";
import LazyLoad from "./LazyLoad";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import Service from "./Service";

const Home = () => {
  return (
    <div classNameName="homepage ">
      <div className="container-fluid p-md-5">
        <div className="">
          <div className=" row flex-center">
            <div class="col-sm-5 order-md-1 ">
              <div className=" w-100">
                <div className="d-flex justify-content-center mt-4 mb-3">
                  <img
                    class="img-fluid "
                    src="/assets/img/home/baner.svg"
                    alt=""
                    width="95%"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-7 col-lg-6 text-center text-md-start d-flex align-items-center">
              <div className="title-baner">
                <div className="title-inside">
                  <h1 class="fw-medium">
                    Butuh desain ?<br />
                    <span class="fw-bold">Upreal</span> adalah solusinya.
                  </h1>
                  <p class="mt-3 mb-4">
                    <span class="fw-medium">Upreal </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen.
                    Jika anda ingin meneruskan bisa klik I'm Order.{" "}
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
      </div>
      <SectionHomeOne />
      <SectionHomeTwo />
      <Service />
      <CustomArrows />
      <LazyLoad />
    </div>
  );
};

export default Home;
