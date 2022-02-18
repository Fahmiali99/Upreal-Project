import React from "react";

function SectionAboutZero() {
  return (
    <div>
      <div className="title-banner-about ">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className=" about-garis-left mx-md-3 " />
            <h4>The Best</h4>
            <div className=" about-garis-left mx-md-3 " />
          </div>
          <div className=" text-center">
            <h1>Digital Marketing</h1>
            <div className="d-flex justify-content-center">
              <p className="container">
                Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
                ditempatkan <br /> untuk mendemostrasikan elemen grafis atau
                presentasi visual seperti font, tipografi, dan tata letak.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a
              class="btn btn-lg pt-1 pb-1 text-light  bg-primary hover-top btn-glow text-end btn-about"
              href="/"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAboutZero;
