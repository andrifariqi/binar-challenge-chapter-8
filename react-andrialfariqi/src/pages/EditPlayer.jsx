import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import "../App.css";

class EditPlayer extends Component {
  render() {
    return (
      <Container className="ec-player">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form action="/edit-player" method="post">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridUsername">
                  <FloatingLabel controlId="floatingUsername" label="Username">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={"Andri"}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <FloatingLabel controlId="floatingEmail" label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={"andrialfariqiid@gmail.com"}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <FloatingLabel controlId="floatingSelect" label="Roles">
                    <Form.Select
                      aria-label="Floating label select example"
                      value={"1"}
                      required
                    >
                      <option>Open this select menu</option>
                      <option value="1">Admin</option>
                      <option value="2">Staff</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={"Andri"}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <FloatingLabel controlId="floatingTextarea" label="Address">
                  <Form.Control
                    as="textarea"
                    placeholder="Address"
                    style={{ height: "100px" }}
                    value={"Indonesia"}
                    required
                  />
                </FloatingLabel>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="floatingState" label="State">
                    <Form.Control
                      type="state"
                      placeholder="State"
                      value={"Tangerang Selatan"}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <FloatingLabel controlId="floatingZip" label="Zip">
                    <Form.Control
                      type="zip"
                      placeholder="Zip"
                      value={"15310"}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Button
                variant="outline-secondary"
                type="submit"
                className="ec-btn-player"
              >
                Edit Player
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default EditPlayer;
