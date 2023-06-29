"user client";
import React from "react";
import "./style.css";

const Header = ({ title, count }) => {
  return (
    <div className="headerContainer">
      <span className="count">{count}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
