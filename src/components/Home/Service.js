import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Service = () => {
  return (
    <div id="layanan">
      <Container>
        <h2 className="text-center pt-5 text-light">Jasa yang tersedia</h2>
        <p className="text-center pb-5 text-light">
          Anda dapat memilih jasa yang tersedia di UPREAL
        </p>
        <div class="tz-gallery pb-5">
          <div className="w-100 d-flex justify-content-center">
            <Row className=" row-cols-1 row-cols-md-3 g-4 pb-4">
              <Col>
                <div className="lightbox card h-100 rad-home-parent border-light bg-dark">
                  <Container className=" text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa1.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className=" text-center ">
                      <h4 className="pb-2 text-light">Logo Design</h4>
                      <Link className="" to="/Logo">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="lightbox card h-100  rad-home-parent border-light bg-dark">
                  <Container className=" text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa2.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className=" text-center">
                      <h4 className="pb-2 text-light">Flyer design</h4>
                      <Link className="" to="/Flyer">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="lightbox card h-100  rad-home-parent border-light bg-dark">
                  <Container className=" text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa3.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className=" text-center ">
                      <h4 className="pb-2 text-light">Poster design</h4>
                      <Link className="" to="/Poster">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="lightbox card h-100  rad-home-parent border-light bg-dark">
                  <Container className=" text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa4.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className="text-center ">
                      <h4 className="pb-2 text-light">Instagram feed design</h4>
                      <Link className="" to="/Instagram">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="lightbox card h-100  rad-home-parent border-light bg-dark">
                  <Container className="text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa5.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className=" text-center ">
                      <h4 className="pb-2 text-light">Video editor</h4>
                      <Link className="" to="/Video">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="lightbox card h-100  rad-home-parent border-light bg-dark">
                  <Container className=" text-center p-3 bg-secondary rad-home">
                    <Image src="/assets/img/home/fa6.png" alt="" width="50%" />
                  </Container>
                  <div className="d-flex align-items-center h-100 p-4">
                    <Container className="text-center ">
                      <h4 className="pb-2 text-light">Many more</h4>
                      <Link className="" to="/More">
                        <Button type="button" class="btn btn-success ">
                          Order Now
                        </Button>
                      </Link>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
