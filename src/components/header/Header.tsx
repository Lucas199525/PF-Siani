import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import H2 from '../subH2/h2';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Lucas SIANI</h1>
        <h5 className="text-light">
          <H2 />
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={'me.png'} alt="" />
        </div>
        <a href="#contact" className="scroll__down Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
