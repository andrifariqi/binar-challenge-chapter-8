import React, { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

class NvBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link className="nv-player" to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Player" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nv-player" to="/create-player">
                    Create Player
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nv-player" to="/edit-player">
                    Edit Player
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nv-player" to="/search-player">
                    Search Player
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NvBar;
