import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function SectionBlogOne() {
  return (
    <div>
      <Container className="py-4 ">
        <div className="card bg-transparent py-5 border-secondary  ">
          <div className="card-body">
            <Row>
              <Col className=" col-4 client-mobile ">
                <div className="d-flex justify-content-md-center">
                  <div className=" mx-md-0 me-md-5">
                    <div className="badge-circle bg-soft-danger  ">
                      <svg
                        className="bi bi-person-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#F53838"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mx-1">
                    <p className=" text-1000 mb-0 text-light font-montserrat">
                      90+{" "}
                    </p>
                    <p className="mb-0 text-light fw-light">Happy Clients </p>
                  </div>
                </div>
              </Col>
              <Col className="col-4 client-mobile border-start">
                <div className="d-flex justify-content-md-center">
                  <div className="mx-md-0 me-md-5">
                    <div className="badge-circle bg-soft-danger">
                      <svg
                        className="bi bi-geo-alt-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#F53838"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mx-1">
                    <p className=" text-1000 mb-0 text-light font-montserrat">
                      3{" "}
                    </p>
                    <p className="mb-0 text-light fw-light ">Negara</p>
                  </div>
                </div>
              </Col>
              <Col className="col-4 client-mobile border-start">
                <div className="d-flex justify-content-md-center">
                  <div className="mx-md-0 me-md-5">
                    <div className=" badge-circle bg-soft-danger">
                      <svg
                        className="bi bi-hdd-stack-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#F53838"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mx-1">
                    <p className=" text-1000 mb-0 text-light font-montserrat">
                      1600+{" "}
                    </p>
                    <p className="mb-0 text-light fw-light">Project Selesai </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionBlogOne;
