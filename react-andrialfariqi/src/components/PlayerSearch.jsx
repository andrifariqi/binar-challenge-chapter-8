import React, { Component } from "react";
import {
  InputGroup,
  SplitButton,
  Dropdown,
  FormControl,
  Container,
  Table,
} from "react-bootstrap";
import "./PlayerSearch.css";

class PlayerSearch extends Component {
  state = {
    filter: "",
    playerList: [
      {
        username: "Andri",
        email: "andri@abcde.com",
        experience: "100",
        level: "100",
      },
      {
        username: "Alfa",
        email: "alfa@abcde.com",
        experience: "90",
        level: "90",
      },
      {
        username: "Riqi",
        email: "riqi@abcde.com",
        experience: "80",
        level: "80",
      },
      {
        username: "Binar",
        email: "binar@abcde.com",
        experience: "100",
        level: "100",
      },
    ],
  };

  handleSearch = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { filter } = this.state;
    const data = [...this.state.playerList].filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(filter.toLowerCase())
      );
    });
    return (
      <Container className="SrcPlayer">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Input Search Username / Email / Experience / Level"
            value={filter}
            onChange={this.handleSearch}
          />
          <SplitButton
            variant="outline-light"
            title="Submit"
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item href="#">Username</Dropdown.Item>
            <Dropdown.Item href="#">Email</Dropdown.Item>
            <Dropdown.Item href="#">Experience</Dropdown.Item>
            <Dropdown.Item href="#">Level</Dropdown.Item>
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
            </tr>
          </thead>
          <tbody>
            {data.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>{el.experience}</td>
                  <td>{el.level}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default PlayerSearch;
