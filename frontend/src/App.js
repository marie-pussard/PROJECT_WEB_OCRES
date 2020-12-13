import React from 'react';
import './App.css';
import './index.css';
import Graph1 from './components/Graph1';
import Graph2 from './components/Graph2';
import Graph3 from './components/Graph3';
import Graph4 from './components/Graph4';
import Graph5 from './components/Graph5';
import Meteo from './components/meteo';
import Carousel from './components/carousel';

import './components/fonction.css';
import Test, { Aled } from './components/fonction';




function App() {
  return (
    <>
      <header className="header">
        <div className="row pomme">
            <div className="col-10">Dashboard</div>
            <div className="col-2">
              <button id="b" onClick={()=>Aled()}>
                <img alt="" src="icon.png" class="icon"/>
              </button>
            </div>
        </div>
      </header>


      <div className="row" >
        <div className="col-sm-12 col-md-12 col-lg-9 linear-gradient">
          
          <div className="row graph">
            <div className="col-xs-12 col-sm-9 graph">
              <Graph1></Graph1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 graph">
              <Graph2></Graph2>
            </div>

            <div className="col-xs-12 col-sm-6 graph">
              <Graph3></Graph3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 graph">
              <Graph4></Graph4>
            </div>

            <div className="col-xs-12 col-sm-6 graph">
              <Graph5></Graph5>
            </div>
          </div>

        </div>

        <div className="col-sm-12 col-md-12 col-lg-3 backColor">
          <div className="row graph">
            <Meteo className="meteo"></Meteo>
          </div>

          <div className="row graph">
            
            GRAPHE MUSIQUE
            
          </div>

          <div className="row graph">
            <Carousel></Carousel>      
          </div>
        </div>
      </div>

      <footer className="footer">

      </footer>
  

  </>


  );
}

export default App;
