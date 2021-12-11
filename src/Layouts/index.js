import Header from "./Header";
import Footer from "./Footer";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Layouts({ children }) {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Header />
      <Container className="" style={{ height: "100%" }}>
        <Row className="" style={{ height: "100%" }}>
          <Col sm={8} className="mt-5">
            {children}
          </Col>
          <Col sm={4} className="text-white fs-3 m-auto">
            <Row className="g-4 d-none d-lg-block">
              <Col sm={12}>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "link-edit active-link" : "link-edit glow"
                  }
                >
                  Projects
                </NavLink>
              </Col>
              <Col sm={12}>
                <NavLink
                  to="/tools"
                  className={({ isActive }) =>
                    isActive ? "link-edit active-link" : "link-edit glow"
                  }
                >
                  Tools
                </NavLink>
              </Col>
              <Col sm={12}>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    isActive ? "link-edit active-link" : "link-edit glow"
                  }
                >
                  About me
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
