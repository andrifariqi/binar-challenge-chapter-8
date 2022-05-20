import React, { Component } from "react";
import {
  InputGroup,
  SplitButton,
  Dropdown,
  FormControl,
  Container,
  Table,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <Container className="ConPlayer">
        <Link to="/create-player">
          <Button
            className="BtnCrtPlayer"
            type="submit"
            variant="outline-light"
          >
            Create Player
          </Button>
        </Link>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Input Search Username / Email / Experience / Level"
          />
          <SplitButton
            variant="outline-light"
            title="Submit"
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item href="/player">Username</Dropdown.Item>
            <Dropdown.Item href="/player">Email</Dropdown.Item>
            <Dropdown.Item href="/player">Experience</Dropdown.Item>
            <Dropdown.Item href="/player">Level</Dropdown.Item>
          </SplitButton>
        </InputGroup>

        <Table responsive striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andri</td>
              <td>andrialfariqiid@gmail.com</td>
              <td>100</td>
              <td>100</td>
              <td>
                <Button
                  className="ButtonPlayer"
                  type="submit"
                  variant="outline-success"
                >
                  Update
                </Button>
                <Button
                  className="ButtonPlayer"
                  type="submit"
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Player;
