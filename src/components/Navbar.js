import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark navs">
        <div className="container-fluid">
          <div className="container-fluid w-100 ">
            <a className=" navbar-brand fw-bold fs-4 font-italic" href="#">
              UPREAL
            </a>

            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className=" collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
