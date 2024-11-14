import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/red";
import Blue from "./components/blue";
import Home from "./components/home";

function App() {
  return (
    <div>
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;