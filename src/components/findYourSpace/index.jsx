import React from "react";
import "./findYourSpaceStyle.css";
import find_space_img from "assets/find_space_img.png";
import Button from "shared/button";

const FindYourSpace = () => {
  return (
    <div className="fys_container flex">
      {/* left */}
      <section className="fys_image_section">
        <img src={find_space_img} alt="find_space_img" className="image" />
      </section>

      {/* right */}
      <section className="fys_text_section">
        <div>
          <p>{"Your dream home is only a few clicks away"}</p>
        </div>

        <div>
          <span>{"- Find your space now!"}</span>
        </div>

        <div className="fys_button">
          <Button
            style={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1B2056",
              borderRadius: "8px",
              padding: "10px 20px",
              backgroundColor: "#fff",
            }}
            btnName={"Download app"}
          />
        </div>
      </section>
    </div>
  );
};

export default FindYourSpace;
