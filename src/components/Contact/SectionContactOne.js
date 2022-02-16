import React from "react";
import ContactUs from "./ContactUs";

function SectionContactOne() {
  return (
    <div>
      <div>
        <div className="head-report">
          <div className="title-report">
            <div className="text-center bg-light p-3">
              <h1>Layanan Pengaduan</h1>
              <p>Anda dapat mengadukan pelayanan jasa Upreal disini</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <ContactUs />
      </div>
    </div>
  );
}

export default SectionContactOne;
