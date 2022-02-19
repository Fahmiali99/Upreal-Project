import React from "react";

function SectionTwo() {
  return (
    <div className="aboutpage-2">
      <div className="row">
        <div className="col-sm  ">
          <div className="container">
            <h2>
              Cees have Solutions <br /> that provide your <br />
            </h2>
            <div className="d-flex">
              <a class="btn  btn-danger hover-top btn-glow text-end" href="/">
                I'm Order
                <span className="ml-3 ">
                  <i class="fas fa-tag"></i>
                </span>
              </a>
              <a
                class="btn  btn-secondary hover-top btn-glow text-end mx-md-2"
                href="/"
              >
                I'm Order
                <span className="ml-3 ">
                  <i class="fas fa-tag"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm ">
          <div className="row row-cols-2 row-cols-md-2 g-4 pb-4">
            <div className="col bg-warning">
              <i class="fa-solid fa-brush"></i>
              <h5>
                Customer
                <br />
                Assistant
              </h5>
              <p>Lorem ipsum, atau ringkasnya lipsum</p>
            </div>
            <div className="col">
              <h1>HEllo</h1>
            </div>
            <div className="col">
              <h1>HEllo</h1>
            </div>
            <div className="col">
              <h1>HEllo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
