import React from "react";
import "./findHomeStyle.css";
import Boxes from "components/boxes";
import box1 from "assets/box1.svg";
import box2 from "assets/box2.svg";
import box3 from "assets/box3.svg";
import box4 from "assets/box4.svg";
import box5 from "assets/box5.svg";

const FindHome = () => {
  return (
    <section className="find_home_container">
      <section className="find_home_wrapper">
        <div className=" popular">
          <h1>Find homes in popular neighbourhooods</h1>
          <address>Apartments in Lekki, Obalende, Agege & Yaba </address>
        </div>
        <section className="container">
          <div className="boxes_parent_container">
            {/* Boxes go here */}

            <div className="first_box_div">
              <Boxes image={box1} title="8 properties" subtitle="Lekki" />
            </div>
            <div className="second_boxes_div">
              <Boxes image={box2} title="2 properties" subtitle="Agege" />
              <Boxes image={box3} title="11 properties" subtitle="Gbagada" />
            </div>
            <div className="third_boxes_div">
              <Boxes image={box4} title="45 properties" subtitle="Obalende" />
              <Boxes image={box5} title="12 properties" subtitle="Yaba" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default FindHome;
