import React, { useState } from 'react';
import './Styles/Questions.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <div className="accordion-content">
        <p>{content}</p>
        </div>}
    </div>
  );
};

export default Accordion;
