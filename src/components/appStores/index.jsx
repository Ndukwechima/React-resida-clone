import React from "react";
import phone1 from "assets/phone1.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./appStoresStyle.css";
const AppStores = () => {
  return (
    <section className="wrapper">
      <section className="containers">
        <div className="left_section">
          <div>
            <h1>Download Our App</h1>
            <p className="body_text">
              With intuitive search features and a curated selection of
              properties tailored to your preferences, finding your dream home
              has never been easier. Join thousands of satisfied users who have
              unlocked the key to their ideal living space with just a tap.
            </p>
            <div className="download_wrapper">
              <div className="app_store_div">
                <FaApple color="#fff" size={20} />
                <small>|</small>
                <div>
                  <p className="download">Download on the</p>
                  <p className="app_store">App Store</p>
                </div>
              </div>
              <div className="app_store_div">
                <FaGooglePlay color="#fff" size={20} />
                <small>|</small>
                <div>
                  <p className="download">Get it on</p>
                  <p className="app_store">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_section">
          <div className="image_div">
            <img src={phone1} alt="phone-img" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AppStores;
