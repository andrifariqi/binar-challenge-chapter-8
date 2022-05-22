import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Nvbar extends Component {
  render() {
    return (
      <Navbar
        className="Nav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="Nav-link" to="/">
                Home
              </Link>
              <Link className="Nav-link" to="/player">
                Player
              </Link>
              <Link className="Nav-link" to="/contact">
                Contact
              </Link>
              <Link className="Nav-link" to="/about">
                About
              </Link>
            </Nav>
            <Nav>
              <Nav.Link>Andri Al Fariqi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Nvbar;
