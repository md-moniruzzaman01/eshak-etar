import React from 'react';


import useChartData from '../../hooks/useChartData';
import Areacharts from './Areacharts';
import Linechart from './Linechart';
import Piechart from './PieChart';
import Barchat from './Barchat';

export const DataContext = React.createContext();
const Dashboard = () => {
    const [chartData ,setChartData] =useChartData();
    const {month,investment,revenue,sell} = chartData;

    return (
       <div className='grid min-h-[1260px] sm:grid-cols-1 md:grid-cols-2'>
           <DataContext.Provider value={chartData}>
           <Linechart ></Linechart>
          
           <Areacharts ></Areacharts>
           <Barchat  ></Barchat >
           <Piechart ></Piechart>
           </DataContext.Provider>
       </div>
            
          );
};

export default Dashboard;