import emailjs from "emailjs-com";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Logo() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_logo", "logo", e.target, "user_5bDEXDZfZdPTj9D4CSF7V")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
        <form onSubmit={sendEmail}>
          <Row className="row pt-5 pb-5 ">
            <Col className="col-9 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
                autofocus
              />
            </Col>
            <Col className="col-9 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </Col>
            <Col className="col-9 form-group pt-2 mx-auto">
              <input
                type="nummber"
                className="form-control"
                placeholder="Whatsapp / Telp"
                name="nummber"
                required
              />
            </Col>
            <Col className="col-9 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </Col>
            <Col className="col-9 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
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
                value="Send Message"
              ></input>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}
