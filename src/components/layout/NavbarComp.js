import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/scss/custom.scss";

// import image
import { Hamburger } from "../../assets/img/Image";

const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-wave-2 fixed-top py-4 animate__animated animate__backInDown">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-title-2">
            PURWA
          </NavLink>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Hamburger} className="image-hamburger img-fluid" alt="" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav animate__animated animate__slideInDown">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about-me"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  ABOUT ME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/skills"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  SKILLS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/project"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  PROJECT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
