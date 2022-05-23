import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Container,
} from "react-bootstrap";
import "./PlayerUpdate.css";

class PlayerUpdate extends Component {
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleRolesChange = (event) => {
    this.setState({ roles: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Form
        className="FormContact"
        // action="/update-player"
        // method="post"
      >
        {this.props.playerList.map((el, i) => {
          return (
            <Container key={i}>
              <Row className="RowContact">
                <Col>
                  <FloatingLabel label="Username">
                    <Form.Control
                      placeholder="Username"
                      value={el.username}
                      onChange={this.handleUsernameChange}
                    />
                    ;
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={el.email}
                      onChange={this.handleEmailChange}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="RowContact">
                <Col>
                  <FloatingLabel label="Phone">
                    <Form.Control
                      placeholder="Phone"
                      value={el.phone}
                      onChange={this.handlePhoneChange}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Roles">
                    <Form.Select
                      value={el.roles}
                      onChange={this.handleRolesChange}
                      disabled
                    >
                      <option>{el.roles}</option>
                      {/* <option>Open this select menu</option>
                      <option value="1">Admin</option>
                      <option value="2">Staff</option> */}
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
                      value={el.address}
                      onChange={this.handleAddressChange}
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
                      value={el.password}
                      onChange={this.handlePasswordChange}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Container>
          );
        })}
        <Button
          className="ButtonContact"
          // type="submit"
          variant="outline-light"
        >
          Update
        </Button>
      </Form>
    );
  }
}

export default PlayerUpdate;
