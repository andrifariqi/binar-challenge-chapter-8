import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import CreatePlayer from "./pages/CreatePlayer";
import EditPlayer from "./pages/EditPlayer";
import SearchPlayer from "./pages/SearchPlayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/create-player" element={<CreatePlayer />}></Route>
        <Route exact path="/edit-player" element={<EditPlayer />}></Route>
        <Route exact path="/search-player" element={<SearchPlayer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
