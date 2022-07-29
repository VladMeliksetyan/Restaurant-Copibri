import './menus.style.css';
import React from 'react';

function Menus() {
  return (
    <div className="container">
      <h2 className="title">Découvrez le menu</h2>
      <div className="nav-bar">
        <ul className="navbar-el">
          <li className="btn">PITAS</li>
          <li className="btn">Salades garnies et énergisantes</li>
          <li className="btn3">Déjeuners</li>
          <li className="btn">Collations</li>
        </ul>
      </div>
    </div> 
  );
}

export default Menus;
