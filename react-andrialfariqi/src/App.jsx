import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Player from "./components/Player";
import PlayerCreate from "./components/PlayerCreate";
import PlayerSearch from "./components/PlayerSearch";
// import PlayerUpdate from "./components/PlayerUpdate";

class App extends Component {
  state = {
    playerList: [
      {
        username: "Andri",
        email: "andrialfariqiid@gmail.com",
        phone: "081287440836",
        roles: "Admin",
        address: "Indonesia",
        password: "Andri",
        experience: "100",
        level: "100",
      },
    ],
  };

  addPlayer = (createPlayer) => {
    this.setState({
      playerList: [...this.state.playerList.concat(createPlayer)],
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact element={<Home />} path="/"></Route>
            <Route
              exact
              element={
                <>
                  <PlayerCreate onAddPlayer={this.addPlayer} />
                  <Player playerList={this.state.playerList} />
                </>
              }
              path="/player"
            ></Route>
            <Route
              exact
              element={<PlayerSearch />}
              path="/search-player"
            ></Route>
            {/* <Route
              exact
              element={<PlayerCreate />}
              path="/create-player"
            ></Route>
            <Route
              exact
              element={<PlayerUpdate />}
              path="/update-player"
            ></Route> */}

            <Route exact element={<Contact />} path="/contact"></Route>
            <Route exact element={<About />} path="/about"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
