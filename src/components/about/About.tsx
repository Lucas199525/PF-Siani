import React from 'react';
import { FaAward, FaUserTie } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>A propos de Moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="dev.png" alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>+4 ans dans l'informatique</small>
            </article>
            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>clients</h5>
              <small>
                Credit Agricole <br /> MEAE <br /> LapsTech <br /> BNP paribas{' '}
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>
                Habitat <br /> Magasin <br />
                Sagaie <br /> visa <br /> LapsTech
              </small>
            </article>
          </div>
          <p>
            je suis actuellement en Mission à la BNP paribas en tant que
            developpeur
          </p>
          <a href="#contact" className="btn btn-primary">
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
