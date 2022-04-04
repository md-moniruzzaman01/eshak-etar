import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from './Dashboard';

const Areacharts = ( ) => {
  const chartData = useContext(DataContext);
    return (
        <div>
           <h2 className='font-heading text-3xl text-center mb-11'>Invesment vs revenue</h2>
            <AreaChart
      width={500}
      height={400}
      data={chartData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="investment"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="revenue"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      
    </AreaChart>
        </div>
    );
};

export default Areacharts;