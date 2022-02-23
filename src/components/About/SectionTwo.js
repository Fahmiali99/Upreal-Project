import React from "react";
// Ukuran kanan kiri belom seimbang
function SectionTwo() {
  return (
    <div className="aboutpage-2">
      <div className=" container">
        <div className="row">
          <div className="col-sm  ">
            <div className="d-flex justify-content-center pt-3">
              <div className="">
                <h2>Cees have Solutions</h2>
                <h2 className="sec-two-about"> that provide your</h2>
                <div className="d-flex">
                  <a
                    class="btn  btn-primary hover-top btn-glow text-end"
                    href="/"
                  >
                    I'm Order
                    <span className="ml-3 ">
                      <i class="fas fa-tag"></i>
                    </span>
                  </a>
                  <a
                    class="btn  btn-secondary hover-top btn-glow text-end ml-2"
                    href="/"
                  >
                    More
                    <span className="ml-3 ">
                      <i class="fas fa-tag"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm ">
            <div className=" pt-3">
              <div className="row row-cols-2 row-cols-md-2 g-2 pb-4">
                <div className="col  ">
                  <div className="p-2 bg-light  border-about ">
                    <div className="about-bol">
                      <i class="fa-brands fa-atlassian icons-about"></i>
                    </div>
                    <h5>
                      Customer
                      <br />
                      Assistant
                    </h5>
                    <p>Lorem ipsum, atau ringkasnya lipsum</p>
                  </div>
                </div>
                <div className="col  ">
                  <div className="p-2 bg-light border-about">
                    <div className="about-bol">
                      <i class="fa-brands fa-buffer icons-about"></i>
                    </div>
                    <h5>
                      Customer
                      <br />
                      Assistant
                    </h5>
                    <p>Lorem ipsum, atau ringkasnya lipsum</p>
                  </div>
                </div>
                <div className="col  ">
                  <div className="p-2 bg-light border-about">
                    <div className="about-bol">
                      <i class="fa-solid fa-campground icons-about"></i>
                    </div>
                    <h5>
                      Customer
                      <br />
                      Assistant
                    </h5>
                    <p>Lorem ipsum, atau ringkasnya lipsum</p>
                  </div>
                </div>
                <div className="col  ">
                  <div className="p-2 bg-light border-about">
                    <div className="about-bol">
                      <i class="fa-brands fa-deezer icons-about"></i>
                    </div>
                    <h5>
                      Customer
                      <br />
                      Assistant
                    </h5>
                    <p>Lorem ipsum, atau ringkasnya lipsum</p>
                  </div>
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
