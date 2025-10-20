import './tooltip.css';

const Tooltip = () => {
  return (
    <div className="container">
      <div className="hacker-container">
        <button className="hacker-btn">SYSTEM</button>
        <div data-text="SYSTEM OVERRIDE" className="hacker-tooltip">
          <span>BY ARCOM TECH</span>
        </div>
      </div>
    </div>
  );
};
