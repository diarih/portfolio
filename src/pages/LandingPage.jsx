import React from "react";
import Layouts from "../Layouts";
import { Row, Col } from "react-bootstrap";

export default function LandingPage() {
  return (
    <>
      <Layouts>
        <div
          className="text-white"
          style={{ maxHeight: "70vh", marginTop: "5rem" }}
        >
          <div className="hero mb-5">
            <div dangerouslySetInnerHTML={{ __html: '<h1>Hello iam 👋' }} />
            <div className="fw-bold btn-shine">Ihza</div>
          </div>
          <Row className="pt-4">
            <Col sm={3}>Junior Web Dev</Col>
            <Col>UI/UX Design</Col>
          </Row>
        </div>
      </Layouts>
    </>
  );
}
