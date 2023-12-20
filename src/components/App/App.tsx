import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
