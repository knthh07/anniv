import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Apology from "./Pages/Apology";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apology />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
