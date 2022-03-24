import React, { useState } from "react";
import { getIn } from "../api/transactions";
import "./../styles/transactions.css";
import { Link } from "react-router-dom";
export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [meterNumber, setMeterNumber] = useState();
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || meterNumber === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/meter number",
      }));
      setIsDisabled(true);
    } else {
      const token = await getIn({
        username,
        meterNumber,
      });

      window.location.pathname = "/home";
      setToken(token.token);
      localStorage.setItem("tokenObj", JSON.stringify(token));
      setIsDisabled(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex text-xs">
      <form
        onSubmit={handleSubmit}
        className="md:w-2/4 bg-white text-gray-500 m-auto"
      >
        <h3>Login to buy</h3>

        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          className="border border-gray-500 rounded bg-gray-100"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label for="password">Meter number</label>
        <input
          type="password"
          id="meter"
          className="border border-gray-500 rounded bg-gray-100"
          onChange={(e) => setMeterNumber(e.target.value)}
        />

        <div className="btns">
          <button
            type="submit"
            id="Buy"
            className="bg-blue-500 w-full p-5 text-white font-normal"
          >
            Continue
          </button>

          <div className="register">
            {"No account?  "}
            <a href="/register">Register</a>
          </div>
        </div>
      </form>
    </div>
  );
}
