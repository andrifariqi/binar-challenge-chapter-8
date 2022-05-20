import React, { Component } from "react";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import "./About.css";

class About extends Component {
  state = {
    about: {
      firstname: "Andri",
      lastname: "Al Fariqi",
      title: "Binar Challenge Chapter 8",
      imageSource:
        "https://i.pinimg.com/originals/3a/e9/70/3ae970653b70da3d2f0108cd70f82a73.gif",
    },
  };
  render() {
    return (
      <Container className="ConAbout">
        <Row className="RowAbout">
          <Col>
            <FloatingLabel label="First Name">
              <Form.Control
                placeholder="First Name"
                defaultValue={this.state.about.firstname}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Last Name">
              <Form.Control
                placeholder="Last Name"
                defaultValue={this.state.about.lastname}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowAbout">
          <Col>
            <FloatingLabel label="Title">
              <Form.Control
                placeholder="Title"
                defaultValue={this.state.about.title}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <img src="./images/A.gif" className="img-fluid rounded-pill" alt="A" />
        <p className="ParAbout">
          Image source : {this.state.about.imageSource}
        </p>
      </Container>
    );
  }
}

export default About;
