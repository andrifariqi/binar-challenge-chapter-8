import React, { Component } from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import "./PlayerUpdate.css";

class PlayerUpdate extends Component {
  render() {
    return (
      <Form className="FormContact" action="/create-player" method="post">
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Username">
              <Form.Control placeholder="Username" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Email">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Phone">
              <Form.Control placeholder="Phone" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Roles">
              <Form.Select>
                <option value="1">Admin</option>
                <option value="2">Staff</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Address">
              <Form.Control
                as="textarea"
                placeholder="Address"
                style={{ height: "20vh" }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowContact">
          <Col>
            <FloatingLabel label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="password"
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

export default PlayerUpdate;
