import "./footer.style.css";
// import "./header.style.css";
const Footer = () => {
  return (
    <div class="container-footer">
      <div class="flex">
        <ul class="info-list">
          <li class="item">955 route Jean-Gauvin, Québec (QC) G1X 4M5</li>
          <li class="item">418 871-8414</li>
          <li class="item"></li>
          <li class="item"> bonjour@restaurantcolibri.ca</li>
          
        </ul>
        <div class="footer-bar">
          <span class="footer-bar-item">
            <i class="arrow"></i>

            <span class="bar-items">
              <span class="state">
                <span class="state_sybl"></span>
                <span class="state-text ">Fermé</span>
              </span>
              <span class="bar-day">Mardi</span>
            </span>
            <span class="row"></span>
            <span class="time">10h00 à 20h00</span>
          </span>
        </div>
      </div>
      <div class="footer-bottom">
        <h1 class="footer-logo">Colibri</h1>
        <a class="footer-btn footer-btn-filled">
          <span class="footer-btn__label"> Commander en ligne</span>
        </a>
        <span class="footer-right">
          <span>Design et code par MamboMambo</span>
          <span class="footer-right-2">Tous droits réservés - Restaurant Colibri ©2019</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
