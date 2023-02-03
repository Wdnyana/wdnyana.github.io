import React from "react";
import { Image } from "react-bootstrap";

import { Profile, Download, Share } from "../../assets/img/Image";

import "../../assets/scss/custom.scss";

const Home = () => {
  return (
    <>
      <div className="custom">
        <div className="desktop-display">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-7 mb-4 rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-4 animate__animated animate__backInLeft">
                  Hello, I am
                </h1>
                <h1 className="display-5 animate__animated animate__backInRight">
                  PURWA WIADNYANA
                </h1>
                <p className="col-md-12 sub-display text-font-txt animate__animated animate__backInUp">
                  I am happy with the experience of expanding my knowledge.
                </p>
                <div className="mt-4 button-group">
                  <a
                    className="text-decoration-none"
                    href="https://drive.google.com/uc?export=download&id=1sz4dnctl_SYyqaiw9HEwRmSNzkomJ5HN"
                  >
                    <button className="btn btn-download bg-wave-2 text-title-2 rounded-pill py-2 px-4 animate__animated animate__backInLeft">
                      <img src={Download} alt="download" className="btn-img" />
                      DOWNLOAD CV
                    </button>
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://drive.google.com/uc?export=download&id=1sz4dnctl_SYyqaiw9HEwRmSNzkomJ5HN"
                  >
                    <button className="btn btn-download bg-wave-2 text-title-2 rounded-pill mt-0 mt-md-2 mt-lg-0 py-2 px-4 animate__animated animate__backInRight">
                      <img src={Share} alt="download" className="btn-img" />
                      VIDEO INTODUCTION
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center animate__animated animate__backInDown">
              <Image
                src={Profile}
                className="img-profile rounded-circle "
                fluid
              />
            </div>
          </div>
        </div>

        <div className="mobile-display">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center animate__animated animate__backInDown">
              <Image
                src={Profile}
                className="img-profile rounded-circle "
                fluid
              />
            </div>

            <div className="col-12 col-md-7  mt-3 rounded-3 ">
              <div className="container-fluid pb-5 pt-4">
                <h1 className="display-4 animate__animated animate__backInLeft">
                  Hello, I am
                </h1>
                <h1 className="display-5 animate__animated animate__backInRight">
                  PURWA WIADNYANA
                </h1>
                <p className="col-12 sub-display text-font-txt animate__animated animate__backInUp">
                  I am happy with the experience of expanding my knowledge.
                </p>
                <div className="mt-4">
                  <a
                    className="text-decoration-none"
                    href="https://drive.google.com/uc?export=download&id=1sz4dnctl_SYyqaiw9HEwRmSNzkomJ5HN"
                  >
                    <button className="btn bg-wave-2 text-title-2 rounded-pill mb-2 me-3 py-2 px-4 animate__animated animate__backInLeft">
                      <img src={Download} alt="download" className="btn-img" />
                      DOWNLOAD CV
                    </button>
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://drive.google.com/uc?export=download&id=1sz4dnctl_SYyqaiw9HEwRmSNzkomJ5HN"
                  >
                    <button className="btn bg-wave-2 text-title-2 rounded-pill mb-2 py-2 px-4 animate__animated animate__backInRight">
                      <img src={Share} alt="download" className="btn-img" />
                      VIDEO INTODUCTION
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
