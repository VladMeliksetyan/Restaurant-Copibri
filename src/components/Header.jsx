import './header.style.css';
import logo from '../assets/images/icon.png';
import React from 'react';

const Header = (props) => {
  const { setmenu } = props;
  props = false;
  return (
    <header className='l-header'>
      <a>
        <span className='redSmall' />
        <button
          className='burger-btn-c'
          onClick={() => {
            setmenu((prev) => !prev);
          }}
        >
          <span className='burger-btn'></span>
        </button>
        <img className='logoImg' src={logo} />
        <i className='o-icon'>
          <h1 className='svg-logo-text'>Colibri</h1>
        </i>
      </a>
      <a className='c-btn  c-btn--filled | '>
        <span className='c-btn__label '>Commander en ligne</span>
      </a>
    </header>
  );
};

export default Header;
