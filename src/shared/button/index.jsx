import React from "react";
import "./buttonStyles.css";
const Button = ({ btnName, outline }) => {
  return (
    <button className={`${outline ? "outline" : "btn"}`}>{btnName}</button>
  );
};

export default Button;
