import React from "react";
import "./buttonStyles.css";
const Button = ({ style, btnName, outline, rightIcon, leftIcon }) => {
  return (
    <button style={style} id className={`${outline ? "outline" : "btn"}`}>
      {leftIcon && <span className="left_icon">{leftIcon}</span>}

      {btnName}

      {rightIcon && <span className="right_icon">{rightIcon}</span>}
    </button>
  );
};

export default Button;
