import React from "react";
import useToken from "../Hooks/UseToken";
import { Link } from "react-router-dom";
export default function Home() {
  const { logout } = useToken();
  return (
    <div className=" bg-white text-gray-500 w-screen h-screen flex flex-col">
      <div className=" text-gray-500 h-28 flex flex-col w-full px-20 border-b  bg-gray-100">
        <div className="flex">
          <h1>Service dashboard</h1>
          <div className="ml-auto">
            <button
              onClick={logout}
              className="bg-transparent relative -mt-0 "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex m-auto text-lg">
        <a
          href="/transactions"
          className="m-auto text-white hover:text-gray-50 bg-gray-500 rounded p-5 py-3"
        >
          Buy power
        </a>
      </div>
    </div>
  );
}
