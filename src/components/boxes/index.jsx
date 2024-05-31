import React from "react";
import "./boxesStyle.css";
const Boxes = ({ image, title, subtitle }) => {
  return (
    <section>
      <div className="box-container">
        <div className="box_img_div">
          <img src={image} alt="boxes-img" />
        </div>
        <div className="address_div">
          <address>{title}</address>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
