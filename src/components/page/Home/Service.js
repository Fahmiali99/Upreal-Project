import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import imgsatu from "../../../assets/images/home/fa1.png";
import imgdua from "../../../assets/images/home/fa2.png";
import imgtiga from "../../../assets/images/home/fa3.png";
import imgempat from "../../../assets/images/home/fa4.png";
import imglima from "../../../assets/images/home/fa5.png";
import imgenam from "../../../assets/images/home/fa6.png";

const Service = () => {
  const menu = [
    {
      id: 1,
      name: "Logo Design",
      image: imgsatu,
      href: "/Logo",
    },
    {
      id: 2,
      name: "Flyer Design",
      image: imgdua,
      href: "/Flyer",
    },
    {
      id: 3,
      name: "Poster Design",
      image: imgtiga,
      href: "/Poster",
    },
    {
      id: 4,
      name: "Logo Design",
      image: imgempat,
      href: "/Logo",
    },
    {
      id: 5,
      name: "Instagram feed design",
      image: imglima,
      href: "/Instagram",
    },
    {
      id: 6,
      name: "Many more",
      image: imgenam,
      href: "/More",
    },
  ];

  return (
    <div id="layanan" className="bg-dark">
      <Container>
        <h2 className="text-center pt-5 text-light">Jasa yang tersedia</h2>
        <p className="text-center pb-5 text-light">
          Anda dapat memilih jasa yang tersedia di UPREAL
        </p>
        <div className="tz-gallery pb-5">
          <div className="w-100 d-flex justify-content-center">
            <Row className=" row-cols-1 row-cols-md-3 g-4 pb-4">
              {menu.map((item) => (
                <div key={item.id}>
                  <Col>
                    <div className="lightbox card h-100 rad-home-parent border-light bg-dark">
                      <Container className=" text-center p-3 bg-secondary rad-home">
                        <Image src={item.image} alt="" width="50%" />
                      </Container>
                      <div className="d-flex align-items-center h-100 p-4">
                        <Container className=" text-center ">
                          <h4 className="pb-2 text-light">{item.name}</h4>
                          <Link className="" to={item.href}>
                            <Button type="button" class="btn btn-primary ">
                              Order Now
                            </Button>
                          </Link>
                        </Container>
                      </div>
                    </div>
                  </Col>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
