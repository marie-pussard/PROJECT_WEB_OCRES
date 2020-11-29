import React from 'react';
import logo from './logo.svg';
import './App.css';
import GraphLine from './components/GraphLine';
import Histo from './components/Histo';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Pie from'./components/Camembert';



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
            <GraphLine />
            </div>
            <div className="graph">
            <GraphLine />
            </div>

          </div>
          <div className="containergauchebas">
            <div className="graph">
            <GraphLine />
            </div>
            <div className="graph">
            < Pie />
            </div>
         </div>
        </div>
        <div className="ContainerDroite">

        </div>

      </div>

    </div>
  );
}

export default App;




