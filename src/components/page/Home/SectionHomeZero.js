import React from "react";
import { Container } from "react-bootstrap";

const SectionHomeZero = () => {
  return (
    <div classNameName="homepage ">
      <div className="w-100 d-flex justify-content-center home-image ">
        <Container className="mt-5 mb-5 d-flex justify-content-center">
          <div className="col-sm  text-center text-md-start d-flex align-items-center">
            <div className="title-inside ">
              <h1 className="text-light ">
                Butuh desain ?<br />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-pink-600 ">
                  Upreal
                </span>{" "}
                adalah solusinya.
              </h1>
              <p className="mt-3 mb-4 text-light  ">
                <span className="fw-medium">Upreal </span> menyediakan banyak
                jasa yang dapat di pilih sesuai yang di butuhkan konsumen. Jika
                anda ingin meneruskan bisa klik I'm Order
              </p>
              <a className="" href="#layanan">
                <button className="btn btn-dark hover-top btn-glow">
                  I'm Order
                </button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SectionHomeZero;
