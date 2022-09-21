import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Explain from "../../../assets/images/home/explain.png";

function SectionHomeTwo() {
  return (
    <div>
      <Container className="pt-5 mt-5 pt-md-5 mb-5 pb-5 mb-md-5">
        <Row className="align-items-center">
          <Col md={5} lg={7} className=" text-lg-center ">
            <Image
              className="img-fluid mb-5 mb-md-0 img-tawaran"
              src={Explain}
              alt=""
            />
          </Col>
          <Col md={7} lg={5} className=" text-center text-md-start text-light">
            <h3 className="fw-medium text-light">
              Kami Menawarkan <br />
              Berbagai Macam Fitur Untuk Anda
            </h3>
            <div className="d-flex">
              <svg
                className="bi bi-check-circle-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2FAB73"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="ms-2 text-light">Bebas request desain.</p>
            </div>
            <div className="d-flex">
              <svg
                className="bi bi-check-circle-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2FAB73"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="ms-2 text-light">Revisi sepuasnya.</p>
            </div>
            <div className="d-flex">
              <svg
                className="bi bi-check-circle-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2FAB73"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="ms-2 text-light">Harga kompetitif.</p>
            </div>
            <div className="d-flex">
              <svg
                className="bi bi-check-circle-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2FAB73"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="ms-2 text-light">Tepat waktu & sesuai anggaran.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionHomeTwo;
