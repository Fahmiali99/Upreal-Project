import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const SectionHomeZero = () => {
  return (
    <div classNameName="homepage ">
      <div className="w-100 d-flex justify-content-center ">
        <Container className="mt-5 mb-5 d-flex justify-content-center">
          <Row className=" flex-center ">
            <Col className="col-sm order-md-1 ">
              <div className=" w-100">
                <div className="d-flex justify-content-center mt-4 mb-3">
                  <Image
                    class="img-fluid "
                    src="/assets/img/home/baner.png"
                    alt=""
                    width="95%"
                  />
                </div>
              </div>
            </Col>

            <div class="col-sm  text-center text-md-start d-flex align-items-center">
              <div className="title-inside ">
                <h1 class="text-light">
                  Butuh desain ?<br />
                  <span class="text-secondary ">Upreal</span> adalah solusinya.
                </h1>
                <p class="mt-3 mb-4 text-light">
                  <span class="fw-medium">Upreal </span> menyediakan banyak jasa
                  yang dapat di pilih sesuai yang di butuhkan konsumen. Jika
                  anda ingin meneruskan bisa klik I'm Order.{" "}
                </p>
                <a class="btn btn-danger hover-top btn-glow" href="#layanan">
                  I'm Order{" "}
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SectionHomeZero;
