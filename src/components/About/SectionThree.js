import React from "react";

function SectionThree() {
  return (
    <div className="aboutpage-3">
      <div className="container ">
        <div className="container d-flex p-4 justify-content-center">
          <h2 className="text-center">Founder UPREAL</h2>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm ">
            <img src="/assets/img/about/founder.png" alt="" width="70%" />
          </div>
          <div class="col-sm text-left d-flex align-items-center">
            <div className="container ">
              <div>
                <h2> Mekki Patria</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown .
                </p>

                <div>
                  <a className="icon-sosmed-ceo" href="#">
                    <i class="fab fa-instagram-square"></i>
                  </a>
                  <a className="icon-sosmed-ceo" href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a className="icon-sosmed-ceo" href="#">
                    <i class="fab fa-twitter-square"></i>
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

export default SectionThree;
