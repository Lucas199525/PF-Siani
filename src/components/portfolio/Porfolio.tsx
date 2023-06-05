import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5></h5>
      <h2>Experiences Professionnel</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={'helpline.png'} />
          </div>
          <h3>Helpline</h3>
          <p>
            Technicien Informatique N1 / N2 J’ai travaillé au sein de
            l'entreprise Helpline en tant que technicien N1/N2 (Prestataire pour
            Crédit Agricole) Principales réalisations : <br />
            • Dépannage utilisateur: software, hardware et système
            d’exploitation • Gestion des comptes dans L’active directory <br />
            • Gestion des connexions aux serveurs <br />
            • Système d’exploitation : Windows 10, 8,7 Windows server / linux
            Debian, Ubuntu, kali <br />
            • Gestion des connexions au réseau <br />
            •Cybersécurité.
          </p>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={'cagip.jpeg'} />
          </div>
          <h3>CAGIP</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={'logo-blue.png'} />
          </div>
          <h3>Inetum</h3>
          <p>Developpeur frontend et Backend</p>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={'meae.png'} />
          </div>
          <h3>MEAE</h3>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
