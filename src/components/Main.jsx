import './main.style.css';
import mainImg from '../assets/images/mainImg.jpg';
import mainImg2 from '../assets/images/mainImg2.png';
import React from 'react';


const Main = () => {
  return (
    <div className='content-main'>
      <div className='img_redCrl'>
        <img src={mainImg} alt='image' className='mainImg' />
        <span className='red-circle'></span>
        <img src={mainImg2} className='bottom-img'></img>
        <span className='blue-crcl'></span>
      </div>
      <div className='rightPart'>
        <div>
          <h2 className='text'>
            Nos ingrédients sont sélectionnés pour leur fraîcheur et l'éthique
            de travail de nos collaborateurs
          </h2>
        </div>
        <a className='main-btn main-btn-filled'>
          <span className='main-btn__label'>Découvrez pourquoi</span>
        </a>
      </div>
    </div>
  );
};

export default Main;
