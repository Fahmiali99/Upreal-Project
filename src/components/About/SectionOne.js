import React from "react";

function SeactionOne() {
  return (
    <div className="aboutpage pt-3 pb-3">
      <div className="row col-12">
        <div className="col-sm">
          <div className="contianer ">
            <img src="/assets/img/about/Scenes04.svg" alt="" width="100%" />
          </div>
        </div>
        <div className="col-sm ">
          <div className="d-flex align-items-center w-100 h-100">
            <div className="">
              <h2>
                Introduction best saas <br />
                customer communication <br />
                service
              </h2>
              <p className="w-75">
                Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
                ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
                visual seperti font, tipografi, dan tata letak.
              </p>
              <a class="btn  btn-primary hover-top btn-glow text-end" href="/">
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
  );
}

export default SeactionOne;
