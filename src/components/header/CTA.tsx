import React from 'react';

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={'CV'} download>
        Telecharger mon CV
      </a>
      <a className="btn btn-primary" href="#contact">
        {' '}
        Parlons
      </a>
    </div>
  );
};

export default CTA;
