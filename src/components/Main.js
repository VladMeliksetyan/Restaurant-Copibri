import "./main.style.css";
import mainImg from "../assets/images/mainImg.jpg";
import mainImg2 from "../assets/images/mainImg2.png"


const Main = () => {
  return (
    <div class = "content-main">
      <div class ="img_redCrl">
        <img src={mainImg} alt="image" class="mainImg" />
        <span class="red-circle"></span>
        <img src={mainImg2} class="bottom-img"></img>
        <span class="blue-crcl"></span>
      </div>
      <div class="rightPart">
        <div>
          <h2 class="text">
            Nos ingrédients sont sélectionnés pour leur fraîcheur et l'éthique
            de travail de nos collaborateurs
          </h2>
        </div>
        <a class="main-btn main-btn-filled">
          <span class="main-btn__label">Découvrez pourquoi</span>
        </a>
      </div>
    </div>
  );
};

export default Main;
