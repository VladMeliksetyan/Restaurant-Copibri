import Menus from "./Menus";
import logo from "../assets/images/icon.png";
import instaIcon from "../assets/images/insta.png";
import "./navbar.style.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <a class="l-i">
        <img src={logo}></img>
      </a>
      <ul>
        <li>
          <Menus />
        </li>
        <li>MISSION</li>
        <li>CONTACT</li>
        <li>
          <img class="instaIcon" src={instaIcon} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
