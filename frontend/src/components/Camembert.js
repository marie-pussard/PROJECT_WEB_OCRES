import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';


function Pie() {

    const parameters = {
        chart: {
            type: 'pie', //forme du graphique
        },
        title: {
            text: 'Alimentation',
        },
        

        legend: {
            enabled: true
            
        },
        plotOptions: {
            series: {
                pointPadding: 16,
                borderWidth: 4, //bordure de chaque part (slice)
                dataLabels: {
                    enabled: true, //apparait au dessus du point
                    format: '{point.y:.2f}g' //.0f = 0 chiffre après virgule
                }                           //.1f = 1 ch après virgule
            }
        },

        xAxis: {
            type: 'category',

        },

        series: [
            {
            name: "Apports journalier",
            colorByPoint: true, //couleur différente pour chaque point
            data: [
                {
                    name: 'Calories',
                    y: 6,
                },
                {
                    name: 'Gras',
                    y: 3,
                },
                {
                    name: 'Sucre',
                    y: 1,
                },
                {
                    name: 'Sel',
                    y: 4,
                },
                {
                    name: 'Protéïnes',
                    y: 2,
                },
            ],
            },
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
        export default Pie

