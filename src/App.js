import React from 'react';
import logo from './img/susIco.png';
import './App.css';
import Diagnostico from './diagnostico';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Bem vindo ao sistema de diagnostico do SUS versao beta 1.0.0</h3>
      </header>
      <Diagnostico></Diagnostico>
    </div>
  );
}

export default App;
