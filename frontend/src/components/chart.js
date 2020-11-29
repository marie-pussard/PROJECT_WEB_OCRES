import React from 'react';
import * as ReactDOM from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../App.css';


function GraphLine() {

    const parameters = {
        
        chart: {
            type: 'line',
            Width: 50,
        },
        title: {
            text: 'nombre d heures de sport par semaine',
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

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
                    format: '{point.y:.0f}h' //.0f = 0 chiffre après virgule
                }                           //.1f = 1 ch après virgule
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}h'
          },

        series: [
            {
            name: "nbr heures",
            colorByPoint: true, //couleur différente pour chaque point
            data: [
                {
                    name: 'Lundi',
                    y: 2,
                    x: 1,
                },
                {
                    name: 'Mardi',
                    y: 4,
                    x: 2,
                },
                {
                    name: 'Mercredi',
                    y: 3,
                    x: 3,
                },
                {
                    name: 'Jeudi',
                    y: 5,
                    x: 4,
                },
                {
                    name: 'Vendredi',
                    y: 2,
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

    return (
        <div>
            <HighchartsReact 
            highcharts={Highcharts}
            options={parameters} />

        </div>
        
        );
    
    }
        export default GraphLine

function chart(){
const parameters ={
    chart: {
        type: 'column'
    },
    title: {
        text: 'Highcharts responsive chart'
    },
    subtitle: {
        text: 'Resize the frame to see the axes change'
    },
    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
    },
    yAxis: {
        labels: {
            x: -15
        },
        title: {
            text: 'Items'
        }
    },
    series: [{
        name: 'Sales',
        data: [434, 523, 345, 785, 565, 843, 726, 590, 665, 434, 312, 432]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
                xAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -2
                    },
                    title: {
                        text: ''
                    }
                }
            }
        }]
    }
    
}
}




