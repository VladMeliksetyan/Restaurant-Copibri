import "./HealthyComponents.style.css";
import l1_logo from "../assets/images/l1.png";
import l2_logo from "../assets/images/l2.png";
import l3_logo from "../assets/images/l3.png";

const HealthyComponents = () => {
  return (
    <div class="whole-container">
      <span class="banner-mobile"/>
    <div className="content-helthy">
      <h1 class="list-title">
        Plats énergisants à partir d’ingrédients de qualité
      </h1>
      
      <ul class="content-list">
        
        <li class="list-item">
          <span class="l1-img">
            <img src={l1_logo} alt="logo" />
          </span>
          <span class="img-content">
            Un menu composé d'options sans gluten, d'une offre végétarienne,
            végétalienne et de protéines santés
          </span>
        </li>
        <li class="list-item">
          <span class="l1-img">
            <img src={l2_logo}></img>
          </span>
          <span class="img-content">
            Un penchant pour les ingrédients locaux
          </span>
        </li>
        <li class="list-item">
          <span class="l1-img">
            <img src={l3_logo}></img>
          </span>
          <span class="img-content">Restauration durable</span>
        </li>
      </ul>
    </div>
      <div className="banner"></div>
    </div>
  );
};

export default HealthyComponents;
