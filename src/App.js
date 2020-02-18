import React from 'react';
import './App.css';

import Header from './components/header/header';
import HomePage from './pages/home/home'

function App() {
  return (
    <div className="App">
      <Header/>

      <HomePage />
    </div>
  );
}

export default App;
