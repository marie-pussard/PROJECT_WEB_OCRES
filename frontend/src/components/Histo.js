import React from 'react';
import Histogram from 'react-chart-histogram';
import * as ReactDOM from "react-dom";

function Histo() {      

    const labels = ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
    const data = [1, 0, 4, 0, 0,3,0];
    const options = { fillColor: '#8D8DC5', strokeColor: '#FFFFFF'};
    const width = '800';
    const height= '400';

    return (
    <div>
      <Histogram
        xLabels={labels}
        yValues={data}
        options={options}
        width={width}
        height={height}
      />
    </div>
  );

}
    export default Histo

    