import React from "react";
import "./Header.css";
import users from "./users.png";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <h2>octo+</h2>
      </div>
      <div className="header--users">
        <a href="">
          <users />
        </a>
      </div>
    </header>
  );
};
