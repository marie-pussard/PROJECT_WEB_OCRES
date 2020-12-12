import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import '../App.css';

class Graph1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
        chart: {
            type: 'column',
            Width: 50,
        },

        title: {
            text: 'Intensité',
        },

        /*subtitle: {
            text: 'Click the columns to view versions.'
        },*/

        xAxis: {
            type: 'category',

        },

        yAxis: {
            title: {
                text: 'axe des ordonnées'
            },
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                //pointPadding: 0.4,
                borderWidth: 0,
                dataLabels: {
                    enabled: true, //apparait au dessus du point
                    format: '{point.y:.0f}kcal' //.0f = 0 chiffre après virgule
                }                           //.1f = 1 ch après virgule
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}h',
        },

        series: [
            {
            name: "nbr heures",
            colorByPoint: true, //couleur différente pour chaque point
            data: [
                {
                    name: 'Lundi',
                    y: 150,
                    x: 1,
                },
                {
                    name: 'Mardi',
                    y: 600,
                    x: 2,
                },
                {
                    name: 'Mercredi',
                    y: 900,
                    x: 3,
                },
                {
                    name: 'Jeudi',
                    y: 500,
                    x: 4,
                },
                {
                    name: 'Vendredi',
                    y: 200,
                    x: 5,
                },
                {
                    name: 'Samedi',
                    y: 6,
                    x: 6,
                },
                {
                    name: 'Dimanche',
                    y: 1,
                    x: 7,
                },
            ], 
            }
        ],
    }
      
  };


  render(){
    return(
      <div>
            <HighchartsReact 
            highcharts={Highcharts}
            options={this.state} />

        </div>

    )
  }

}
  export default Graph1;
