import './footer.style.css';
import React from 'react';
import PropTypes from 'prop-types';

function Footer({ menu }) {
  return (
  <div className='container-footer'>
      <div className='flex'>
        <ul className='info-list'>
          <li className='item'>955 route Jean-Gauvin, Québec (QC) G1X 4M5</li>
          <li className='item'>418 871-8414</li>
          <li className='item'></li>
          <li className='item'> bonjour@restaurantcolibri.ca</li>
        </ul>
        <div className={menu ? 'hide' : 'footer-bar'}>
          <span className='footer-bar-item'>
            <i className='arrow'></i>

            <span className='bar-items'>
              <span className='state'>
                <span className='state_sybl'></span>
                <span className='state-text '>Fermé</span>
              </span>
              <span className='bar-day'>Mardi</span>
            </span>
            <span className='row'></span>
            <span className='time'>10h00 à 20h00</span>
          </span>
        </div>
      </div>
      <div className='footer-bottom'>
        <h1 className='footer-logo'>Colibri</h1>
        <a className='footer-btn footer-btn-filled'>
          <span className='footer-btn__label'> Commander en ligne</span>
        </a>
        <span className='footer-right'>
          <span>Design et code par MamboMambo</span>
          <span className='footer-right-2'>
            Tous droits réservés - Restaurant Colibri ©2019
          </span>
        </span>
      </div>
    </div>
  );
}

Footer.propTypes = {
  menu: PropTypes.node.isRequired
}

export default Footer;
