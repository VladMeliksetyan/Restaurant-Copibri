import "./footer.style.css";
const Footer = () => {
  return (
    <div class="container">
      <div class="flex">
        <ul class="info-list">
          <li class="item">955 route Jean-Gauvin, Québec (QC) G1X 4M5</li>
          <li class="item">418 871-8414</li>
          <li class="item"> bonjour@restaurantcolibri.ca</li>
        </ul>
        <div class="footer-bar">
          <span class="footer-bar-item">
            <span class="bar-items">
              <i class="arrow"></i>
              <span class="state">
                <span class="state_sybl"></span>
                <span class="state-text ">Fermé</span>
                
              </span>
              <span>Mardi</span>
              <span class="row"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
