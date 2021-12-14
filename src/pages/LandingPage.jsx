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
          <Row className="pt-4 gy-3">
            <Col xxl={4} xl={4} lg={4} md={12}>Junior Web Dev</Col>
            <Col xxl={4} xl={4} lg={4} md={12}>UI/UX Design</Col>
          </Row>
        </div>
      </Layouts>
    </>
  );
}
