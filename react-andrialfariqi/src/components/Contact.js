import React, { Component } from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <Form className="FormContact" action="/contact" method="post">
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="First Name">
              <Form.Control placeholder="First Name" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Last Name">
              <Form.Control placeholder="Last Name" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Email">
              <Form.Control placeholder="Email" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Phone">
              <Form.Control placeholder="Phone" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Address">
              <Form.Control placeholder="Address" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="State">
              <Form.Control placeholder="State" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Zip">
              <Form.Control placeholder="Zip" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Comments"
                style={{ height: "30vh" }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button className="ButtonContact" type="submit" variant="outline-light">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Contact;
