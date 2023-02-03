import React from "react";

import "../../assets/scss/custom.scss";
import { Facebook, Instagram, Github, LinkedIn } from "../../assets/img/Image";

function FooterComp() {
  return (
    <div className="container-fluid bg-wave-2 py-2 animate__animated animate__backInDown">
      <div className="container">
        <footer className="row d-flex flex-wrap justify-content-between align-items-center py-3 my-2 animate__animated animate__backInDown">
          <div className="text-center navbar-brand m-0 p-0 text-title-2 col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center align-items-center">
            PURWA WIADNYANA
          </div>
          <div className="text-muted text-center col-12 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
            © 2023 | Developed by Purwa Wiadnyana
          </div>
          <div className="social-icon col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <a
              href="https://www.facebook.com/purwa.wiadnyanaputra?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Icon" />
            </a>
            <a
              href="https://www.instagram.com/purwawiadnyana/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/purwa-wiadnyana/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="Icon" />
            </a>
            <a
              href="https://github.com/Wdnyana"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Icon" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FooterComp;
