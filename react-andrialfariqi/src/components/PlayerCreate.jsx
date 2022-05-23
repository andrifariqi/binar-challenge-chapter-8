import React, { Component } from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import "./PlayerCreate.css";

class PlayerCreate extends Component {
  state = {
    createPlayer: [
      {
        username: "",
        email: "",
        phone: "",
        roles: "",
        address: "",
        password: "",
        experience: "",
        level: "",
      },
    ],
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleExperienceChange = (event) => {
    this.setState({ experience: event.target.value });
  };

  handleLevelChange = (event) => {
    this.setState({ level: event.target.value });
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

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((createPlayer) => {
      return this.props.onAddPlayer(createPlayer);
    });
  };

  render() {
    const {
      username,
      email,
      phone,
      roles,
      experience,
      level,
      address,
      password,
    } = this.state.createPlayer;
    return (
      <Form
        className="FormCreate"
        action="/player"
        onSubmit={this.handleSubmit}
      >
        <Row className="RowCreate">
          <Col>
            <FloatingLabel label="Username">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleEmailChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowCreate">
          <Col>
            <FloatingLabel label="Phone">
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={this.handlePhoneChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Roles">
              <Form.Select
                name="roles"
                value={roles}
                onChange={this.handleRolesChange}
              >
                <option>Open this select menu</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowCreate">
          <Col>
            <FloatingLabel label="Experience">
              <Form.Control
                type="text"
                placeholder="Experience"
                name="experience"
                value={experience}
                onChange={this.handleExperienceChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Level">
              <Form.Control
                type="text"
                placeholder="Level"
                name="level"
                value={level}
                onChange={this.handleLevelChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowCreate">
          <Col>
            <FloatingLabel label="Address">
              <Form.Control
                as="textarea"
                placeholder="Address"
                style={{ height: "20vh" }}
                name="address"
                value={address}
                onChange={this.handleAddressChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="RowCreate">
          <Col>
            <FloatingLabel label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="password"
                name="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button className="ButtonCreate" type="submit" variant="outline-light">
          Create
        </Button>
      </Form>
    );
  }
}

export default PlayerCreate;
