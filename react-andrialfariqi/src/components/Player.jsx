import React, { Component } from "react";
import {
  // InputGroup,
  // SplitButton,
  // Dropdown,
  // FormControl,
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
        {/* <Link to="/create-player">
          <Button
            className="BtnCrtPlayer"
            type="submit"
            variant="outline-light"
          >
            Create Player
          </Button>
        </Link> */}
        <Link to="/search-player">
          <Button
            className="BtnCrtPlayer"
            type="submit"
            variant="outline-light"
          >
            Search Player
          </Button>
        </Link>
        {/* <br />
        <Link to="/update-player">
          <Button
            className="BtnCrtPlayer"
            type="submit"
            variant="outline-light"
          >
            Update Player
          </Button>
        </Link> */}
        {/* <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Input Search Username / Email / Experience / Level"
          />
          <SplitButton
            variant="outline-light"
            title="Submit"
            id="segmented-button-dropdown-2"
            alignRight
            type="submit"
          >
            <Dropdown.Item href="#">Username</Dropdown.Item>
            <Dropdown.Item href="#">Email</Dropdown.Item>
            <Dropdown.Item href="#">Experience</Dropdown.Item>
            <Dropdown.Item href="#">Level</Dropdown.Item>
          </SplitButton>
        </InputGroup> */}

        <Table responsive striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Experience</th>
              <th>Level</th>
              <th>Roles</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.playerList.map((el, i) => {
              if (el !== null) {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>{el.experience}</td>
                    <td>{el.level}</td>
                    <td>{el.roles}</td>
                    <td>
                      <Link to="/update-player">
                        <Button
                          className="ButtonPlayer"
                          type="submit"
                          variant="outline-success"
                          onClick={() => this.props.onEditPlayer(el)}
                        >
                          Update
                        </Button>
                      </Link>
                      {/*<Button
                        className="ButtonPlayer"
                        type="submit"
                        variant="outline-danger"
                      >
                        Delete
                      </Button>*/}
                    </td>
                  </tr>
                );
              }
              return el;
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Player;
