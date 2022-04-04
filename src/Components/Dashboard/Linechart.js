import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from './Dashboard';

const Linechart = ( ) => {
  const chartData = useContext(DataContext);
    return (
        <div className='max-h-[500px]'>
             <h2 className='font-heading text-3xl text-center mb-11'>Sall of month</h2>
            <LineChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sell"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
     
      
    </LineChart>
        </div>
    );
};

export default Linechart;