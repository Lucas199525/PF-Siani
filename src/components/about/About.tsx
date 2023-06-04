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
            <img src="profil.jpeg" alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>2+ ans</small>
            </article>
            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>clients</h5>
              <small>
                Credit Agricole <br /> MEAE <br /> LapsTech{' '}
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>
                Sagaie <br /> visa <br /> LapsTech Raspberry
              </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem iste ex sunt et molestias doloremque quisquam qui
            modi magnam est dolor perferendis perspiciatis nulla, repellendus
            excepturi quaerat commodi ratione.
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
