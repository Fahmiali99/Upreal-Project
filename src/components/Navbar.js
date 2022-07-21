import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

var prevScrollpos = window.pageYOffset;
window.onscroll = function (x) {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.boxShadow = "0px 5px 15px #fff";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
};

function Navbar() {
  return (
    <div
      id="navbar"
      className="d-flex justify-content-center bg-dark navbar-big w-100 position-fixed  navbar-depan "
    >
      <nav className="navbar navbar-expand-md bg-dark navbar-dark navs col-md-12 pt-2 pb-2">
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

          <div className=" collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav d-flex align-items-center justify-content-end w-100">
              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link navfit mx-md-1" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navfit" to="/Contact">
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
