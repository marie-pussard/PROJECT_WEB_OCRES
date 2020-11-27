import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, table } from '@storybook/addon-knobs';

import Histo from '../components/Histo';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';
import GraphLine, { MyStockChart } from '../components/GraphLine';



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

stories2.add("Histogram 1", () => (

  <Histo className="chart"/>

));




//2nd histogramme
stories2.add("Histogram 2", () => (

    <GraphLine className="chart"/>
    
));
