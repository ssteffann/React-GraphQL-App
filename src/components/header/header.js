import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        Reddit with GraphQL
      </div>
      <div className='main-menu'>
        <a className='main-menu-item'
           href='https://github.com/ssteffann/react-graphql-app'
           target='_blank'
           rel="noopener noreferrer" >
          GitHub
        </a>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
