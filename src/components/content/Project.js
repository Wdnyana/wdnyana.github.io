import React from "react";

import {
  Character,
  KYN,
  LearningCenter,
  Portfolio,
} from "../../assets/img/Image";

import "../../assets/scss/custom.scss";

const Project = () => {
  return (
    <>
      <div className="mt-md-5">
        <h1 className="skill-title text-title-2 text-center animate__animated animate__zoomIn">
          MY PROJECT
        </h1>
        <div className="row justify-content-center align-items-center mt-md-4">
          <div className="col-12 col-md-6 col-lg-4 mt-2 mt-md-0 mb-3">
            <div className="card mb-3 border-0 rounded-0 shadow p-1 animate__animated animate__backInUp">
              <div className="img-poject">
                <img
                  src={Portfolio}
                  className="card-img-top rounded-0 img-content img-fluid animate__animated animate__zoomIn"
                  alt="..."
                />
              </div>
              <div className="card-body my-md-3 my-1">
                <h4 className="card-title text-title text-title-2">
                  Portfolio Project
                </h4>
                <p className="card-text text-2 mt-1 text-title-2">
                  This is my portfolio website, so people can access information
                  about me through this website
                </p>
                <div className="mt-0">
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #BOOTSTRAP
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #REACT
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #SASS
                  </div>
                </div>
                <a className="text-decoration-none" href="##">
                  <button className="btn btn-download bg-wave-2 text-title-2 d-block mx-auto w-100 rounded-pill mt-4 mb-2 mb-md-0 py-2 px-4 animate__animated animate__zoomIn">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card mb-3 border-0 rounded-0 shadow p-1 animate__animated animate__backInUp">
              <div className="img-poject">
                <img
                  src={KYN}
                  className="card-img-top rounded-0 img-content img-fluid animate__animated animate__zoomIn"
                  alt="..."
                />
              </div>
              <div className="card-body my-md-3 my-1">
                <h4 className="card-title text-title text-title-2">
                  KYN Project
                </h4>
                <p className="card-text text-2 mt-1 text-title-2">
                  KYN (Know Your Neigborhood) is a website user who can add
                  their store, edit their profile if they have an account. thus
                  providing information to users about what is in their
                  neighborhood
                </p>
                <div className="mt-0">
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #BOOTSTRAP
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #REACT
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #JAVA
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #My SQL
                  </div>
                </div>
                <a className="text-decoration-none" href="##">
                  <button className="btn btn-download bg-wave-2 text-title-2 d-block mx-auto w-100 rounded-pill mt-4 mb-2 mb-md-0 py-2 px-4 animate__animated animate__zoomIn">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card mb-3 border-0 rounded-0 shadow p-1 animate__animated animate__backInUp">
              <div className="img-poject">
                <img
                  src={Character}
                  className="card-img-top rounded-0 img-content img-fluid animate__animated animate__zoomIn"
                  alt="..."
                />
              </div>
              <div className="card-body my-md-3 my-1">
                <h4 className="card-title text-title text-title-2">
                  Input Data Character Project
                </h4>
                <p className="card-text text-2 mt-1 text-title-2">
                  This Project is Simple Input data process in Javascript and
                  the data not handled with backend
                </p>
                <div className="mt-0">
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #BOOTSTRAP
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #CSS
                  </div>
                  <div className="d-inline-block px-2 py-1 bg-wave-2 me-2 mt-2 rounded-2">
                    #JAVA SCRIPT
                  </div>
                </div>
                <a className="text-decoration-none" href="##">
                  <button className="btn btn-download bg-wave-2 text-title-2 d-block mx-auto w-100 rounded-pill mt-4 mb-2 mb-md-0 py-2 px-4 animate__animated animate__zoomIn">
                    See Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
