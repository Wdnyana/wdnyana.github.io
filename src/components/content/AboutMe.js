import React from "react";

import {
  Futsal,
  Game,
  Travelling,
  Networking,
  CTF,
} from "../../assets/img/Image";

import "../../assets/scss/custom.scss";

const AboutMe = () => {
  return (
    <div className="about-me mt-md-5">
      <div className="text-about mb-5">
        <h1 className="text-center heading-about animate__animated animate__backInLeft">
          ABOUT ME
        </h1>
        <p className="mt-2 text-center sub-text-about animate__animated animate__backInRight">
          I am Putu Purwa Wiadnyana Putra, commonly known as Purwa. As a
          beginner in software engineering, I currently wish to enhance my
          skills to gain new knowledge and experiences that will prepare me for
          work in the IT industry.
        </p>
      </div>

      <div className="education bg-wave-2 py-5 px-2 p-md-5 animate__animated animate__zoomIn">
        <h1 className="text-center heading-about animate__animated animate__backInUp">
          MY EDUCATION & CERTIFICATION
        </h1>
        <div className="row d-flex justify-content-center align-items-center mt-3 mt-md-4">
          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card border-0 shadow p-3 animate__animated animate__backInUp">
              <div className="card-body">
                <h5 className="card-title text-title text-title-2 ">
                  Lithan EduClaas
                </h5>
                <p className="card-text text-1 text-title-2 mb-0">
                  Applied Degree in Software Engineering.
                </p>
                <p className="card-text text-2 mt-1 text-secondary">
                  2022 - Present,&ensp; Singapore
                </p>
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card border-0 shadow p-3 animate__animated animate__backInUp">
              <div className="card-body">
                <h5 className="card-title text-title text-title-2">
                  Bachelor of Computer Systems.
                </h5>
                <p className="card-text text-1 text-title-2 mb-0">
                  High school diploma - social sciences
                </p>
                <p className="card-text text-2 mt-1 text-secondary">
                  2019 - Present,&ensp; Bali - Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card border-0 shadow p-3 animate__animated animate__backInUp">
              <div className="card-body">
                <h5 className="card-title text-title text-title-2">
                  SMA Negeri 2 Tabanan
                </h5>
                <p className="card-text text-1 text-title-2 mb-0">
                  High school diploma - social sciences
                </p>
                <p className="card-text text-2 mt-1 text-secondary">
                  2015 - 2018,&ensp; Bali - Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center mt-3 mt-md-4">
          <div className="col col-md-6 col-lg-6 my-3 my-md-4 ">
            <div className="card mb-3 mb-md-0 p-3 border-0 shadow animate__animated animate__backInUp">
              <div className="img-ser">
                <img
                  src={CTF}
                  className="img-certif img-fluid py-3"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-title text-title-2 mb-0 text-center">
                  CERTIFICATION CTF GKSK 5
                </h5>
              </div>
            </div>
          </div>

          <div
            id="navbar-example2"
            className="col col-md-6 col-lg-6 my-3 my-md-4 "
          >
            <div className="card mb-3 mb-md-0 p-3 border-0 shadow animate__animated animate__backInUp">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="scrollspy-example"
                tabindex="0"
              >
                {" "}
                <div className="img-ser">
                  <img
                    id="scrollspyHeading1"
                    src={Networking}
                    className="img-sertif img-fluid py-3"
                    alt="..."
                  />
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title text-title text-title-2 mb-0 text-center">
                  CERTIFICATION NETWORKING
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intersting mb-5">
        <h1 className="text-center heading-about animate__animated animate__backInUp">
          MY HOBBY
        </h1>
        <div className="row d-flex justify-content-center align-items-center mt-3 p-md-5 pt-md-0">
          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card mb-3 mb-md-0 p-3 border-0 shadow animate__animated animate__backInUp">
              <img
                src={Futsal}
                className=" img-icon img-fluid py-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-title text-title-2 mb-0 text-center">
                  FUTSAL
                </h5>
                <p className="card-text text-2 mt-1 text-secondary text-center">
                  2 Times In One Week.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card mb-3 mb-md-0 p-3 border-0 shadow animate__animated animate__backInUp">
              <img src={Game} className=" img-icon img-fluid py-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-title text-title-2 mb-0 text-center">
                  PLAYING GAME
                </h5>
                <p className="card-text text-2 mt-1 text-secondary text-center">
                  I Still Playing Game.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-lg-4 my-3 my-md-0">
            <div className="card mb-3 mb-md-0 p-3 border-0 shadow animate__animated animate__backInUp">
              <img
                src={Travelling}
                className=" img-icon img-fluid py-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-title text-title-2 mb-0 text-center">
                  TRAVELLING
                </h5>
                <p className="card-text text-2 mt-1 text-secondary text-center">
                  Sometimes if I Have Free Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
