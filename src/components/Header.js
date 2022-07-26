import "./header.style.css";

const Header = () => {
  return (
    <header class="l-header">
      <a>
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
