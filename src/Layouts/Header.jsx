import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <Navbar variant="dark" className="mt-4" expand="lg">
        <Container>
          <Navbar.Brand className="fs-6"><Link to="/" className="link-edit"> Dihza.</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="link-nav ms-auto" navbarScroll>
            <Nav.Link target={"_blank"} href="https://www.linkedin.com/in/diar-ihza/" className="pe-5 d-none d-lg-block">LinkedIn</Nav.Link>
            <Nav.Link target={"_blank"} href="https://github.com/diarih" className="pe-5 d-none d-lg-block">Github</Nav.Link>
            <Nav.Link className="d-lg-none d-block" href="/projects">Projects</Nav.Link>
            <Nav.Link className="d-lg-none d-block" href="/contact">Contact</Nav.Link>
            <Nav.Link className="d-lg-none d-block" href="/aboutme">About me</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
