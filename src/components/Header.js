import "./header.style.css";
import logo from "../assets/images/icon.png";

const Header = () => {
  return (
    <header class="l-header">
      <a>
        <span class="redSmall"/>
        <button class="burger-btn-c">
          <span class="burger-btn"></span>
        </button>
        <img class="logoImg" src={logo}/>
        <i class="o-icon">
          <h1 class="svg-logo-text">Colibri</h1>
        </i>
      </a>
      <a class="c-btn  c-btn--filled | ">
        <span class="c-btn__label ">Commander en ligne</span>
      </a>
    </header>
  );
};

export default Header;
