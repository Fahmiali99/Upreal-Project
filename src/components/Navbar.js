import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      id="navbar"
      className="d-flex justify-content-center navbar-big w-100  navbar-depan border-bottom border-secondary"
    >
      <nav className="navbar navbar-expand-md  navbar-dark navs col-md-12 pt-2 pb-2">
        <Container>
          <Container>
            <a className=" navbar-brand fw-bold fs-2 font-italic " href="/">
              UPREAL
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Container>

          <div
            className="w-full collapse navbar-collapse "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav d-flex align-items-center justify-content-end w-100">
              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navfit" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
