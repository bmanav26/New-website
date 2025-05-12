import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-6 flex gap-4 justify-center">
          <Link
            to="/Register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
          <Link
            to="/Login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </nav>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
