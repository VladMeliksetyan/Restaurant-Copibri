import React from 'react';
import './NavbarMobile.style.css';
import instaIconM from '../assets/images/insta.png';
import peper from '../assets/images/peper.png';
import pinkImg from '../assets/images/mainImg2.png';

const NavbarMobile = (props) => {
  const { menu } = props;
  return (
    <div class={menu ? 'NBM-container' : 'hide'}>
      <div class='menuNB'>
        <ul class='ul-navbarM'>
          <li class='menus-btn-nbm'>Menus</li>
          <li>MISSON</li>
          <li>CONTACTS</li>
          <img src={instaIconM} class='instaIconM'></img>
        </ul>
        <img src={peper} class='peper'></img>
        <span class='pink-crcl'></span>
        <img src={pinkImg} class='pinkImg'></img>
      </div>
    </div>
  );
};

export default NavbarMobile;
