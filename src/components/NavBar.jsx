import React from "react";
import logo from "../assets/images/icon.png";
import instaIcon from "../assets/images/insta.png";
import "./navbar.style.css";

function NavBar() {
  return (
    <div className="nav-container">
      <a className="l-i" href="/">
        <img src={logo} alt="img" />
      </a>
      <ul>
        <li className="menus">Menus</li>
        <li>MISSION</li>
        <li>CONTACT</li>
        <li>
          <img className="instaIcon" src={instaIcon} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
