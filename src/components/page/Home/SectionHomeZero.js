import React from "react";
import { Container } from "react-bootstrap";

const SectionHomeZero = () => {
  function Upreal() {
    return (
      <span className="  background-animate bg-clip-text text-transparent bg-gradient-to-r from-teal-900 to-slate-700 ...">
        Upreal
      </span>
    );
  }
  return (
    <div classNameName="homepage ">
      <div className="w-100 h-full d-flex justify-content-center home-image ">
        <Container className=" d-flex justify-content-center">
          <div className="col-sm  text-center text-md-start d-flex align-items-center">
            <div className="  ">
              <h1 className=" text-5xl md:text-6xl font-montserrat md:font-montserratFat ">
                Butuh desain ?<br />
                <Upreal /> adalah solusinya.
              </h1>

              <p className="py-2 text-light font-montserratFit text-lg md:w-2/4">
                Upreal menyediakan banyak jasa yang dapat di pilih sesuai yang
                di butuhkan konsumen. Jika anda ingin meneruskan bisa klik I'm
                Order
              </p>

              <a className="" href="#layanan">
                <button className="w-28 h-10 font-montserratFit rounded text-sm btn-dark hover-top btn-glow normal-case bg-gradient-to-r from-teal-900 to-slate-700 ...">
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
