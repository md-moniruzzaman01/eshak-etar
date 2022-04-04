import React, { useContext } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { DataContext } from './Dashboard';

const Piechart = () => {
  const chartData = useContext(DataContext);
    return (
        <div>
            <h2 className='font-heading text-3xl ml-9'>investment Vs revenue</h2>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="investment"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={chartData}
        dataKey="revenue"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
      <Tooltip/>
    </PieChart>
    </ResponsiveContainer>


    
        </div>
    );
};

export default Piechart;