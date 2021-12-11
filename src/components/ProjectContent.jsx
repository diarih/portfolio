/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ProjectContent({ title, tools, content, img, demo }) {
  console.log(img);
  return (
    <Row className="gy-4 mb-5">
      <Col sm={12} className="fs-3 fw-bold">
        {title}
      </Col>
      <Col sm={12} className="fw-bold">
        {tools}
      </Col>
      <Col sm={9}>
        <img src={img} alt="" style={{objectFit: "cover"}} className="img-fluid" />
      </Col>
      <Col
        sm={9}
        className="ls-base"
        style={{ color: "rgba(255, 255, 255, 0.80)" }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
      <Col sm={9}>
        <a href={demo} target={"_blank"} className="fw-bold"> Demo Here</a>
      </Col>
    </Row>
  );
}
