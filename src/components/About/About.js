import React, { useState, useEffect } from "react";
import SectionAboutZero from "./SectionAboutZero";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SimpleSlider from "./SimpleSlider";

const About = () => {
  return (
    <div className="bg-light">
      <div className="uprise">
        <figure class="bg-decoration-circle-left z-index-1" aria-hidden="true">
          <img
            class=""
            src="/assets/background/About/Frames2.png"
            alt="bg"
            width="200px"
          />
        </figure>
      </div>
      <div className="uprise">
        <figure class="bg-decoration-circle-right z-index-1" aria-hidden="true">
          <img
            class=""
            src="/assets/background/About/Frames1.png"
            alt="bg"
            width="200px"
          />
        </figure>
      </div>
      <SectionAboutZero />
      {/* <SectionOne /> */}
      <SimpleSlider />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default About;
