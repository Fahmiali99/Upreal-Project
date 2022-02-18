import React from "react";

function SectionTwo() {
  return (
    <div className="aboutpage-2">
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
