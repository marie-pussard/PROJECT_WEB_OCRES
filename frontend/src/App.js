import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Meteo} from './widgets/meteo';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="App">
      <main className="container">  
        <Meteo/>
      </main>
    </div>
  );
}
}

export default App;
