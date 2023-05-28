import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je m'appel</h5>
        <h1>Lucas SIANI</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={'pro.png'} alt="" />
        </div>
        <a href="#contact" className="scroll__down Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
