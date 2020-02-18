import React from 'react';
import './container.css';

const Container = ({ children }) => {
  return (<div className='container'>{children}</div>);
};

Container.displayName = 'Container';

export default Container;
