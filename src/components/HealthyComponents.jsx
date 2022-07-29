import './HealthyComponents.style.css';
import l1_logo from '../assets/images/l1.png';
import l2_logo from '../assets/images/l2.png';
import l3_logo from '../assets/images/l3.png';
import React from 'react';


const HealthyComponents = () => {
  return (
    <div className='whole-container'>
      <span className='banner-mobile' />
      <div classNameName='content-helthy'>
        <h1 className='list-title'>
          Plats énergisants à partir d’ingrédients de qualité
        </h1>

        <ul className='content-list'>
          <li className='list-item'>
            <span className='l1-img'>
              <img src={l1_logo} alt='logo' />
            </span>
            <span className='img-content'>
              Un menu composé d'options sans gluten, d'une offre végétarienne,
              végétalienne et de protéines santés
            </span>
          </li>
          <li className='list-item'>
            <span className='l1-img'>
              <img src={l2_logo}></img>
            </span>
            <span className='img-content'>
              Un penchant pour les ingrédients locaux
            </span>
          </li>
          <li className='list-item'>
            <span className='l1-img'>
              <img src={l3_logo}></img>
            </span>
            <span className='img-content'>Restauration durable</span>
          </li>
        </ul>
      </div>
      <div classNameName='banner'></div>
    </div>
  );
};

export default HealthyComponents;
