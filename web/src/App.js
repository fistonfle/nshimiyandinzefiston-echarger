import Reactm, { useState } from "react";
import "./index.css";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useToken from "./Hooks/UseToken";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { token, setToken } = useToken();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />

          {!token ? (
            <Route path="/" element={<Login />} exact />
          ) : (
            <>
              <Route path="/transactions" element={<Transaction />} exact />

              <Route path="/home" element={<Home />} exact />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
