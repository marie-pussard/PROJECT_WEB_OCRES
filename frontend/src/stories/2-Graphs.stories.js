import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, table } from '@storybook/addon-knobs';

import Histo from '../components/Histo';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';
import GraphLine, { MyStockChart } from '../components/GraphLine';
import Pie from '../components/Camembert';



/*
const Graph = (args) => 

  <GraphLine {...args} className="chart"/>; 
  
export const Graphique = Graph.bind({});
Graphique.args = {
  width:'400',
  height:'500',
};*/


// ONGLET SECOND STORY
//1er histogramme
const stories2 = storiesOf("2nd story", module);
stories2.addDecorator(withKnobs);

stories2.add("Graphe n°1 / Histogram", () => (

  <Histo className="chart"/>

));




//2nd graphe linéaire
stories2.add("Graphe n°2 / GraphLine", () => (

    <GraphLine className="chart"/>
    
));


//3rd graphe camembert
stories2.add("Graphe n°3 / Pie", () => (

  <Pie className="chart"/>

));
