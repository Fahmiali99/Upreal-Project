import React from "react";
import Up from "../Up";
import CustomArrows from "./CustomArrows";
import LazyLoad from "./LazyLoad";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeZero from "./SectionHomeZero";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Up />
      <SectionHomeZero />
      <SectionHomeOne />
      <SectionHomeTwo />
      <Service />
      <CustomArrows />
      <LazyLoad />
    </div>
  );
};

export default Home;
