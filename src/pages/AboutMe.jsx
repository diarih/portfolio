import React from "react";
import Layouts from "../Layouts";
import { Row, Col } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Layouts>
      <Row className="overflow scroll" style={{ maxHeight: "70vh" }}>
        <Col sm={12} className="fs-1 fw-bold mb-5 text-light">
          Getting Know me
        </Col>
        <Col
          sm={8}
          className="lh-lg mb-3"
          style={{ color: "rgba(255, 255, 255, 0.80)" }}
        >
          <p>
            Hello i am Diar Ihza, Junior Website Developer. I love to create
            wesbite since Senior High School got me back to 2019. Start with
            curiosity and learn it by internet was helping me until now.
          </p>
          <p>
            Furthermore, now I have the opportunity to study at the coding
            skills bootcamp to develop my talent even further. Not only
            developing my hard skills, but also developing my soft skills
            through teamwork.
          </p>
          <p>
            I belive there's no shortcut to get success. Every single time you
            code, its equal you learn from it. Not only from the success, but
            you can count it from mistakes
          </p>
        </Col>
        <Col sm={8} className="mt-1 mb-4 fw-bold text-white">Here are technologies I`ve been working with recently</Col>
        <Col sm={8}>
            <Row>
                <Col className="text-warning">JavaScript</Col>
                <Col className="text-primary">React JS</Col>
                <Col className="text-success">Node.js</Col>
                <Col className="text-white">Express.js</Col>
            </Row>
        </Col>
      </Row>
    </Layouts>
  );
}
