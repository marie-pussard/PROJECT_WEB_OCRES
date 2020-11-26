import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Meteo} from './widgets/meteo';

class App extends React.Component() {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        this.startMeteo;
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main className="container">  
        <Meteo/>

      </main>

    </div>
  );
}
}


export default App;
