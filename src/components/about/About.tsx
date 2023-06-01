import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="profil.jpeg" alt="" />
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card"></article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
