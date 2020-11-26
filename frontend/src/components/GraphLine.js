import React from 'react';
import { Line } from 'react-chart-histogram';

function GraphLine() {      

    const data = {                  //data contain all the data we gonna see on the line (legend)
        labels: ['natation','course à pied','ping-pong'],      //Labels is an array  
        datasets: [                 //Array of objects, each object corresponds to one line
            {
                labels: 'nbr d heures pratiquées',      //ce à quoi correspond l'histogramme    
                data: [5, 6, 2]     //quantité selon cheque label (ici 'natation','course à pied','ping-pong')
            }
        ]                             

    }

    return (
        <div>
            <Line data={data}></Line>
        </div>
    )

}
    export default GraphLine;