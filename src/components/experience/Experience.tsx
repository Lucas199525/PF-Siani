import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies et experiences</h5>
      <h2>Mes Competences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Developpement de Logiciel</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Type Script, Java Script</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>React.js</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Spring Boot, Swagger</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>PostgreSQL</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>SQLServer</h4>
                <small></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Systemes et reseaux</h3>
          <div className="experience__content__tech">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Dépannage utilisateur: software, hardware et système
                  d’exploitation
                </h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Gestion des comptes dans L’active directory</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Gestion des connexions aux serveurs</h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Système d’exploitation : Windows 10, 8,7 Windows server /
                  linux Debian, Ubuntu, kali, Parrot, PopOS
                </h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>
                  Gestion des connexions au réseau, Mise en place de server de
                  virtualisation Proxmox
                </h4>
                <small></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Cybersécurité</h4>
                <small></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
