import React from "react";
import ContactUs from "./ContactUs";

function SectionContactOne() {
  return (
    <div>
      <div>
        <img
          src="https://legal.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/artworked/206512-175291689-2880x1100-h.jpg.transform/hero-s/q90/image.jpg"
          alt=""
          width="100%"
        />
      </div>

      <div className="contact">
        <ContactUs />
      </div>
    </div>
  );
}

export default SectionContactOne;
