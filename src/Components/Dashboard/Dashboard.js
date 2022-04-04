import React from 'react';


import useChartData from '../../hooks/useChartData';
import Areacharts from './Areacharts';
import Linechart from './Linechart';
import Piechart from './PieChart';
import Barchat from './Barchat';

const Dashboard = () => {
    const [chartData ,setChartData] =useChartData();
    const {month,investment,revenue,sell} = chartData
    console.log(chartData);
    return (
       <div className='grid min-h-[1260px] sm:grid-cols-1 md:grid-cols-2'>
           <Linechart chartData={chartData}></Linechart>
          
           <Areacharts chartData={chartData}></Areacharts>
           <Barchat  chartData={chartData}></Barchat >
           <Piechart  chartData={chartData}></Piechart>
       </div>
            
          );
};

export default Dashboard;