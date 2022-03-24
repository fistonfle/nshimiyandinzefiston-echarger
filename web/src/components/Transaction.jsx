import React, { useState } from "react";
import { transaction } from "./../api/transactions";
import "./../styles/transactions.css";
import changeFromTimeStamp from "../utils/ChangeToMonth";
import { Link } from "react-router-dom";
export default function Transaction() {
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [transactionResult, setTransactionResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amount === 0 || amount === "") {
      setErrorMessage((prevState) => ({
        value: "Empty amount",
      }));
      setAmount(0);
    } else {
      const transactionResult = await transaction(amount);
      setTransactionResult(transactionResult);
    }

    setAmount(0);
  };

  return (
    <>
      <div className="w-screen h-screen bg-blue-500 flex text-xs">
        <div className="md:w-2/4 bg-white text-gray-500 m-auto">
          <form className="bg-white">
            <h3>Buy power</h3>

            <label htmlFor="Amount">Amount number</label>
            <input
              type="Number"
              placeholder="Amount"
              id="password"
              className="border border-gray-500 rounded bg-gray-100"
              onChange={(e) => setAmount(e.target.value)}
            />
            {errorMessage.value && (
              <p className="text-danger"> {errorMessage.value} </p>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 w-full p-6 text-white font-normal"
            >
              <a href="#">
                Buy
              </a>
            </button>
          </form>
        </div>

        {transactionResult.status ? (
          <div
            className="modal bg-white rounded text-gray-500 border border-gray-100"
            id="modal-one"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-header">
                <h2>{transactionResult.status} !!!</h2>
                <a href="#modal-one" class="btn-close" aria-hidden="true">
                  ×
                </a>
              </div>
              <div className="modal-body">
                <p>Token: {transactionResult.data.newTransaction.token}</p>
                <p>
                  Valid up to:{" "}
                  {changeFromTimeStamp(
                    transactionResult.data.newTransaction.tokenExpires
                  )}
                </p>
              </div>
              <div className="modal-footer">
                {" "}
                <a href="/" class="btn">
                  Done
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
