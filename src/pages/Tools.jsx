import React from "react";
import Layouts from "../Layouts";
import { Col, Row } from "react-bootstrap";

export default function Tools() {
  return (
    <Layouts>
      <Row className="mb-5">
        <Col sm={8}>
          <div className="fs-1 fw-bold mb-3 text-light">Contact me</div>
          <div
            className="fw-bold"
            style={{ color: "rgba(255, 255, 255, 0.80)" }}
          >
            Are you interested? let's work together and reach me through the
            link below
          </div>
        </Col>
        <Col sm={8} className="mt-5">
          <Row className="fs-1 fw-bold gy-4">
            <Col className="ld" sm={6}>
              <a href="https://www.linkedin.com/in/diar-ihza/" target="_blank" rel="noreferrer noopener" className="text-decoration-none ld contact">
                LinkedIn
              </a>
            </Col>
            <Col sm={6} className="">
              <a href="https://dribbble.com/diarihza" target="_blank" rel="noreferrer noopener" className="text-decoration-none db contact">
                Dribbble
              </a>
            </Col>
            <Col sm={6}>
              <a href="https://github.com/diarih" target="_blank" rel="noreferrer noopener" className="text-decoration-none gh contact">
                Github
              </a>
            </Col>
            <Col sm={6}>
              <a href="https://www.instagram.com/dihzaas/" target="_blank" rel="noreferrer noopener" className="text-decoration-none ig contact">
                Instagram
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layouts>
  );
}
