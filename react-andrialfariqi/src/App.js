import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Player from "./components/Player";
import PlayerCreate from "./components/PlayerCreate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact element={<Home />} path="/"></Route>
            <Route exact element={<Player />} path="/player"></Route>
            <Route
              exact
              element={<PlayerCreate />}
              path="/create-player"
            ></Route>
            <Route exact element={<Contact />} path="/contact"></Route>
            <Route exact element={<About />} path="/about"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
