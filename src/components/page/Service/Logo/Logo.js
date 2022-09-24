import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Logo() {
  const [gmail, setGmail] = useState({
    nama: "",
    email: "",
    message: "",
    emailStatus: "",
  });

  const handleChange = (e) => {
    setGmail({ ...gmail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gmail);
  };

  return (
    <div className="pt-5">
      <div>
        <div className="head-report ">
          <div className="title-report">
            <div className="text-center bg-light p-3">
              <h1>Logo Design</h1>
              <p>Anda dapat pesan logo sesuai ke inginan anda</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <form onSubmit={handleSubmit}>
          <Row className="row pt-5 pb-5 ">
            <Col className="col-9 form-group mx-auto">
              <input
                type="text"
                onChange={handleChange}
                value={gmail.nama}
                className="form-control"
                placeholder="Name"
                name="nama"
                required
                autoFocus
              />
            </Col>
            <Col className="col-9 form-group pt-2 mx-auto">
              <input
                onChange={handleChange}
                value={gmail.email}
                type="text"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </Col>
            {/* <Col className="col-9 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Whatsapp / Telp"
                name="phone"
              
                required
              />
            </Col> */}
            {/* <Col className="col-9 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </Col> */}
            <Col className="col-9 form-group pt-2 mx-auto">
              <textarea
                onChange={handleChange}
                value={gmail.message}
                type="text"
                className="form-control"
                id="message"
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </Col>
            <Col className="col-9 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="submit"
              ></input>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}
