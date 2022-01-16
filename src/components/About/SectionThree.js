import React from "react";

function SectionThree() {
  return (
    <div className="aboutpage-3">
      <div class="container text-center">
        <div class="row">
          <div class="col-sm ">
            <div className="container">
              <h2 className="text-left pb-3">Founder UPREAL</h2>
            </div>
            <img src="/assets/img/about/founder.png" alt="" width="70%" />
          </div>

          <div class="col-sm text-left d-flex align-items-center">
            <div className="container ">
              <div>
                <h3> Mekki Patria Darmawan </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown .
                </p>

                <div>
                  <a
                    className="icon-sosmed-ceo"
                    href="https://www.instagram.com/mekkipat/"
                  >
                    <i class="fab fa-instagram-square"></i>
                  </a>
                  <a
                    className="icon-sosmed-ceo"
                    href="https://www.facebook.com/mekki.patriadarmawan"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a
                    className="icon-sosmed-ceo"
                    href="https://twitter.com/MDarmawa"
                  >
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
