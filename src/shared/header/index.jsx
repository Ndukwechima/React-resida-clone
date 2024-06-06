import React from "react";
import "./headerStyle.css";
import { Link } from "react-router-dom";
import Button from "../button";
import { MdMenuOpen } from "react-icons/md";
import logo from "assets/Resida Logo.svg";

const Header = () => {
  return (
    <div className="header_container">
      {/* Menu */}
      <div className="menu">
        <MdMenuOpen color="#1f4b43" size={30} />
      </div>
      {/* Logo */}

      <div>
        <Link to="/" className="desktop_logo">
          <img src={logo} alt="logo-img" width={150} />
        </Link>
      </div>

      {/* CTA */}
      <div className="header_cta_section">
        <ul>
          {nav.map(({ to, name }, idx) => (
            <li key={idx}>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Button btnName={"Download App"} outline />
        </div>
      </div>
    </div>
  );
};

export default Header;

const nav = [
  {
    name: "Contact",
    to: "/contact",
  },
];
