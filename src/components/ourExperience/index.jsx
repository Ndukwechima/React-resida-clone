import React from "react";
import "./ourExperienceStyle.css";
import our_exp_img1 from "assets/our_exp_img1.png";
import our_exp_img2 from "assets/our_exp_img2.jpg";
import our_exp_img3 from "assets/our_exp_img3.jpg";

const OurExperience = () => {
  return (
    <main className="our_exp_container">
      <section className="boxes_container ">
        <div className="overflow flex">
          <div className="box1">
            <img src={our_exp_img1} alt="our_exp_img1" />
          </div>
          <div className="box2">
            <img src={our_exp_img2} alt="our_exp_img2" />
          </div>
          <div className="box3">
            <img src={our_exp_img3} alt="our_exp_img3" />
          </div>
        </div>
      </section>
      <section className="text flex">
        {` Our Experience guarantees unmatched proficiency and excellence. `}
      </section>
    </main>
  );
};

export default OurExperience;
