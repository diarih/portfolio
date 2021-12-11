import React from "react";
import Layouts from "../Layouts";
import { FloatingLabel, Form } from "react-bootstrap";

export default function Tools() {
  return (
    <Layouts>
      <div className="mb-5">
        <div className="fs-1 fw-bold mb-3 text-light">Contact me</div>
        <div className="fw-bold" style={{ color: "rgba(255, 255, 255, 0.80)" }}>
          Are you interested? let's work together and reach me through the link
          below
        </div>
        <div>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </>
        </div>
      </div>
    </Layouts>
  );
}
