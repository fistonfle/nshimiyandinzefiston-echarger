import React, { useState } from "react";
import { registerNewUser } from "../api/transactions";
import "./../styles/transactions.css";
import { Link } from "react-router-dom";
export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [registerResult, setRegisterResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username",
      }));
    } else {
      const registerResult = await registerNewUser(username);
      setRegisterResult(registerResult);

      alert(
        `Keep this meter number : ${registerResult.data.newDoc.meterNumber}`
      );
      window.location.pathname = "/";
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex text-xs">
      <form
        onSubmit={handleSubmit}
        className="md:w-2/4 bg-white text-gray-500 m-auto"
      >
        <h3>Register</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border border-gray-500 rounded bg-gray-100"
          onChange={(e) => setUsername(e.target.value)}
        />

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 w-full p-6 text-white font-normal"
        >
          <a href="/">
            Register
          </a>

          {/* {} */}
        </button>
      </form>
    </div>
  );
}
