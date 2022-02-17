import React, { useState, useEffect } from "react";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SimpleSlider from "./SimpleSlider";

const About = () => {
  return (
    <div className="pt-5">
      <SectionOne />
      <SimpleSlider />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default About;
