import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo'

const Chao = () =>{
  return(
    <h1>Chao</h1>
  );
}

class App extends Component {

  sumar(a,b){
    return a+b;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <HolaMundo nombre="Yojhan"/>
          <Chao />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React - Como Incrustar JS en el Render:
          </a>
          <p> Función sumar: {this.sumar(1,5)}</p>
        </header>        
      </div>      
    );
  }
}

export default App;
