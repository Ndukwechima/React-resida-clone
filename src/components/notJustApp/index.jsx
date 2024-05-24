import React from "react";
import "./notJustAppstyle.css";
import not_just_app from "assets/not_just_app.png";

const NotJustApp = () => {
  return (
    <div className="info_container">
      <div className="info_inner_container">
        <div className="info_image">
          <img src={not_just_app} alt="not_just_app_image" className="image" />
        </div>
        <div className="info_description">
          <h2 className="info_title">Resida is Not Just an App</h2>
          <h4 className="info_sub_title">
            We are an ecosystem with you at the center
          </h4>
          <div className="info_div">
            <p className="info_text">
              Resida aims to bridge the gap between potential tenants and
              available properties. This app is not just a tool; it&#39s a
              solution for individuals and families who are navigating the
              challenging terrain of apartment hunting in a new or familiar
              city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotJustApp;
