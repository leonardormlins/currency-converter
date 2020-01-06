import React from 'react';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Conversor de Moeda</h1>
      </div>
      <div className="Line">
        <Converter currencyA="USD" currencyB="BRL"></Converter>
      </div>
      <div className="BottomPage">
        <p>Desenvolvido por LeonardoLins</p>
      </div>
    </div>
  );
}

export default App;
