import React from 'react';

import './App.css';
import GraphLine from './components/GraphLine';
import Histo from './components/Histo';

import Pie from'./components/Camembert';
import {Meteo} from './components/meteo';
import { Recipe } from './components/recette';




function App() {
  return (
    <div className="container">
      <div className="titre">
        <h1 id="Titre">Dashboard</h1> 
      </div>

      <div className="containerDashboard">
        <div className="ContainerGauche">
          <div className="Histo">
            <Histo />
          </div>
          <div className="containergauchecentre">
            <div className="graph">
            
            </div>
            <div className="graph">
            < GraphLine />
            </div>

          </div>
          <div className="containergauchebas">
            <div className="graph">
  
            </div>
            <div className="graph">
            < Pie />
            </div>
         </div>
        </div>
        <div className="ContainerDroite">
        <div className="graph">
            <Meteo />
            </div>
            <div className="graph">
            
            </div>

        </div>
        <Recipe />
      </div>

    </div>
  );
}

export default App;




