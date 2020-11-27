import React from 'react';
import Histogram from 'react-chart-histogram';

function Histo() {      

    const labels = ['2017', '2018','2019','2020','2021','2022'];
    const data = [50, 600, 200, 300, 100, 400];
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

    