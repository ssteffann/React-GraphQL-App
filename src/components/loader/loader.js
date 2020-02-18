import React from 'react';
import './loader.css';

const Loader = ({ className }) => {
  return (<div className={`lds-hourglass ${className || ''}`}/>)
};

Loader.displayName = 'Loader';

export default Loader;
