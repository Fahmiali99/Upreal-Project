import React from "react";

function SectionTwo() {
  return (
    <div className="aboutpage-2">
      <div className="container text-center bg-light pt-5 pb-5 mb-3">
        <div className="row">
          <div className="col-sm d-flex align-items-center justify-content-center">
            <div className="container">
              <img src="/assets/img/about/sec2.svg" alt="" width="70%" />
            </div>
          </div>
          <div className="col-sm d-flex align-items-center justify-content-center">
            <div className="container w-100">
              <div>
                <h2 className="text-left">Tentang Kami</h2>
                <p className="text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
