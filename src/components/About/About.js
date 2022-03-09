import React from "react";
import SectionAboutZero from "./SectionAboutZero";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const About = () => {
  return (
    <div className="bg-light">
      <div className="uprise">
        <figure class="bg-decoration-circle-left z-index-1" aria-hidden="true">
          <img
            class=""
            src="/assets/background/About/Frames123.png"
            alt="bg"
            width="100%"
          />
        </figure>
      </div>
      <div className="uprise">
        {/* <figure class="bg-decoration-circle-right z-index-1" aria-hidden="true">
          <img
            class=""
            src="/assets/background/About/Frames1.png"
            alt="bg"
            width="200px"
          />
        </figure> */}
      </div>
      <SectionAboutZero />
      <SectionTwo />
      <SectionOne />
      <SectionThree />

      <SectionFour />
    </div>
  );
};

export default About;
