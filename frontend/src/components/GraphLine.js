import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';


function GraphLine() {

    const parameters = {
        chart: {
            type: 'line',
        },
        title: {
            text: 'nombre d heures de sport par semaine',
        },
        subtitle: {
            text: 'Click the columns to view versions.'
        },
        xAxis: {
            type: 'axe des abscisses'
        },
        yAxis: {
            title: {
                text: 'axe des ordonnées'
            }
        },

        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                //pointPadding: 0.4,
                //borderWidth: 0,
                dataLabels: {
                    enabled: true, //apparait au dessus du point
                    format: '{point.y:.0f}h' //.0f = 0 chiffre après virgule
                }                           //.1f = 1 ch après virgule
            }
        },

        
        
        series: [
            {
            name: "nbr d heures",
            colorByPoint: true, //couleur différente pour chaque point
            data: [2, 4, 1, 3, 6, 4], 
            }
        ],
    }

    return (
        <div>
            <HighchartsReact 
            highcharts={Highcharts}
            options={parameters} />

        </div>
        
        );
    
    }
        export default GraphLine


