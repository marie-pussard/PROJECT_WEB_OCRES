import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GraphLine from './components/GraphLine';
import Graph1 from './components/Graph1';
import Meteo from './components/meteo';
import Food from './components/food';




ReactDOM.render(<GraphLine />, document.getElementById('root'));
ReactDOM.render(<Meteo />, document.getElementById('meteo'));

ReactDOM.render(<GraphLine />, document.getElementById('root3'));
ReactDOM.render(<Graph1 />, document.getElementById('root2'));
ReactDOM.render(<Food/>, document.getElementById('carousel'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
