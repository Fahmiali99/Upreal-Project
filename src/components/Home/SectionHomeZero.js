import { Container } from "@mui/material";
import React from "react";

const SectionHomeZero = () => {
  return (
    <div classNameName="homepage ">
      <div className="homessss">
        <div className="w-100 d-flex justify-content-center ">
          <Container>
            <div className=" row flex-center ">
              <div class="col-sm order-md-1 ">
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

              <div class="col-sm  text-center text-md-start d-flex align-items-center">
                <div className="">
                  <div className="title-inside">
                    <h1 class="">
                      Butuh desain ?<br />
                      <span class="text-secondary ">Upreal</span> adalah
                      solusinya.
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
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SectionHomeZero;
