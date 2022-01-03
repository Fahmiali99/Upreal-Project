import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class=" navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <div className="container">
            <a class=" navbar-brand" href="#">
              Navbar
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class=" collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav d-flex align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
