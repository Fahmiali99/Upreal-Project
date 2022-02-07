import React from "react";

function SeactionOne() {
  return (
    <div className="aboutpage ">
      <div className="pt-5 pb-5 bg-light">
        <div className="pt-5 pb-5">
          <div className="container title pt-5 pb-5 ">
            <div className="row">
              <div className="col-sm">
                <h1>
                  We Work as an <br />
                  extension of your team{" "}
                </h1>
              </div>
              <div className="col-sm">
                <div className="">
                  <p class="">
                    <span class="fw-medium">Upreal </span> menyediakan banyak
                    jasa yang dapat di pilih sesuai yang di butuhkan konsumen.
                    Jika anda ingin meneruskan bisa klik I'm Order.{" "}
                  </p>
                  <a
                    class="btn btn-lg btn-danger hover-top btn-glow shadow-lg"
                    href="#layanan"
                  >
                    I'm Order
                    <span className="ml-3 ">
                      <i class="fas fa-tag"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeactionOne;
