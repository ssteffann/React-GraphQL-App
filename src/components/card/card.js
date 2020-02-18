import React from 'react';

import './card.css';

const Card = ({children, className }) => {
  return (<div className={`card ${className || ''}`}>{children}</div>);
};

Card.displayName = 'Card';

export default Card;
