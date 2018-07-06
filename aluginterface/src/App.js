import React, { Component } from 'react';
import './css/App.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <div className="App-intro">
          <Link to='/apartamentos' className="boxShadow link" >
              Alugar seu Imovel 
          </Link> 
          <Link to='/home' className="boxShadow link">
              Alugar um Imovel 
          </Link> 
        </div>
      </div>
    );
  }
}

export default App;
