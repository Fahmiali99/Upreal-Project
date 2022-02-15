import React from "react";

function SectionTwo() {
  return (
    <div className="aboutpage-2">
      {/* <div className="container  text-center  pt-5 pb-5 mb-3">
        <div className="">
          <img
            src="https://cohive.space/sojuhanjan/wp-content/uploads/2019/12/Berbagai-Manfaat-Teamwork-yang-Membawa-Kemudahan-1200x675.jpeg"
            alt=""
            width="100%"
          />
        </div>
      </div> */}

      <div className="like">
        <div className="container">
          <div className="row ">
            <div className="col ">
              <div className="d-flex justify-content-center pb-5 mb-3">
                <div>
                  <h1>
                    Our <br />
                    Services
                  </h1>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="d-flex justify-content-center">
                <div>
                  <span className="display-4">
                    <i class="fas fa-code-branch text-secondary"></i>
                  </span>
                  <h6>Research</h6>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="d-flex justify-content-center">
                <div>
                  <span className="display-4">
                    <i class="fas fa-swatchbook text-secondary"></i>
                  </span>
                  <h6>Product Design</h6>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="d-flex justify-content-center">
                <div>
                  <span className="display-4">
                    <i class="fas fa-bezier-curve text-secondary"></i>
                  </span>
                  <h6>Visual Design</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
