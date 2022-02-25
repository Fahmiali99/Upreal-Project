import React from "react";

function SeactionOne() {
  return (
    <div className="aboutpage pt-3 pb-3">
      <div className="w-100 d-flex justify-content-center">
        <div className="col-md-9">
          <div className="row ">
            <div className="col-sm-5 order-md-1">
              <div className="">
                <img
                  className="img-fluid"
                  src="/assets/img/about/secenes.svg"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className=" d-flex align-items-center w-100 h-100">
                <div className="">
                  <h2>
                    Introduction best saas <br />
                    customer communication <br />
                    service
                  </h2>
                  <p className="sub-about">
                    Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                    yang ditempatkan untuk mendemostrasikan elemen grafis atau
                    presentasi visual seperti font, tipografi, dan tata letak.
                  </p>
                  {/* <a
                    class="btn  btn-primary hover-top btn-glow text-end"
                    href="/"
                  >
                    I'm Order
                    <span className="ml-3 ">
                      <i class="fas fa-tag"></i>
                    </span>
                  </a> */}
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
