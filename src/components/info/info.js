import React from 'react';

import './info.css';

const Info = ({ title, description, className }) => {
  return (
    <div className={`info ${className || ''}`}>
      <h1 className='info-title'>{title}</h1>
      <p className='info-description'>{description}</p>
    </div>
  );
};

Info.displayName = 'Info';

export default Info;
