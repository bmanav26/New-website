import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/Register">Register</Link> |{" "}
        <Link to="/Login">Login</Link>
      </nav>
      <Routes>
        <Route path = "/Register" element={<Register />} />
        <Route path = "/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;