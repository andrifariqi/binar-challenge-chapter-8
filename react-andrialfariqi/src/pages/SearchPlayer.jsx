import React, { Component } from "react";
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "../App.css";

class SearchPlayer extends Component {
  render() {
    return (
      <Container className="ec-player">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Search by Username / Email / Experience / Level"
          />

          <DropdownButton
            variant="outline-secondary"
            title="Search Options"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#search-username">Username</Dropdown.Item>
            <Dropdown.Item href="#search-email">Email</Dropdown.Item>
            <Dropdown.Item href="#search-experience">Experience</Dropdown.Item>
            <Dropdown.Item href="#search-level">Level</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <Table striped bordered hover responsive="md" size="sm">
          <thead>
            <tr className="tr-search">
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andri</td>
              <td>andrialfariqiid@gmail.com</td>
              <td>100</td>
              <td>100</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default SearchPlayer;
