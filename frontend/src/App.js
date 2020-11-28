import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Meteo} from './widgets/meteo';
import {Recipe} from './widgets/recette';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="App">
      <main className="container">  
        {/* <Meteo/>*/}
        <Recipe/>
      </main>
    </div>
  );
}
}

export default App;
