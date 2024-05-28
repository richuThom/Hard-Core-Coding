import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./userIcon.png";

const Employee = () => (
  <div id="emp">
    <h1>Female Employee details Page</h1>

    <div className="searchBar">
      <input type="text" name="search"></input>
      <button type="submit" name="submit">
        SUBMIT
      </button>
    </div>
    <div className="logo">
      <img src={logo} width="128" height="128"></img>
    </div>
    <div className="userIcon">
      <img src={userIcon} width="100" height="100"></img>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Employee />);
