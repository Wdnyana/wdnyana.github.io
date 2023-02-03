import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../../assets/scss/custom.scss";

const Contact = () => {
  return (
    <>
      <div className="contact mt-md-4">
        <h1 className="skill-title text-title-2 text-center animate__animated animate__backInLeft">
          CONTACT
        </h1>
        <p className="mb-4 text-2  text-title-2 text-center animate__animated animate__backInRight">
          If you’d like to talk about a project, our work or anything else then
          get in touch.
        </p>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="my-3" xs={12} md={5}>
            <div className="mb-3 p-4 px-md-5 bg-wave-2 text-2 animate__animated animate__backInLeft">
              <FontAwesomeIcon icon={faPhone} />
              &ensp;&ensp; +62 878 1017 9468
            </div>

            <div className="mb-3 p-4 px-md-5 bg-wave-2 text-2 animate__animated animate__backInRight">
              <FontAwesomeIcon icon={faEnvelope} />
              &ensp;&ensp; purwawiadnyana08@gmail.com
            </div>
          </Col>
          <Col className="my-3" xs={12} md={7}>
            <div className="embed-responsive embed-responsive-16by9 animate__animated animate__backInRight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.23101755206125!2d115.15476224308078!3d-8.51412159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b1759413145%3A0xd8490d7bf33eb887!2sCandra%20Cell!5e0!3m2!1sid!2sid!4v1673555960052!5m2!1sid!2sid"
                width="600"
                height="500"
                frameBorder={0}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="embed-responsive-item"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
