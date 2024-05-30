import React from "react";

const CircleImage = ({ image, style }) => {
  return (
    <div className="info_circle_img" style={style}>
      <img src={image} alt="infoCircle" className="circle_img" />
    </div>
  );
};

export default CircleImage;
