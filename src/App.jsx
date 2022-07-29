import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import HealthyComponents from './components/HealthyComponents';
import Menus from './components/Menus';
import Footer from './components/Footer';
import Main from './components/Main';
import NavbarMobile from './components/NavbarMobile';

function App() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="parent">
      <div className="section1">
        <NavBar />
      </div>
      <div className="section page-content">
        <header className="section2">
          <Header setmenu={setmenu} />
          {console.log(menu)}
        </header>
        <NavbarMobile menu={menu} />
        <main className={menu && 'hide'}>
          <HealthyComponents />
          <Menus />
          <Main />
        </main>
        <footer className={menu ? 'footer1' : 'footer2'}>
          <Footer menu={menu} />
        </footer>
      </div>
    </div>
  );
}

export default App;
