import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from './Dashboard';

const Barchat = () => {
  const chartData = useContext(DataContext);
    return (
        <div>
           <h2 className='font-heading text-3xl text-center mb-11'>investment and revenue</h2>
              <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Barchat;