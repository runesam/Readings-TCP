import React from 'react';
import {
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const myData = [
    { date: '07', visitors: 0 },
    { date: '08', visitors: 8 },
    { date: '09', visitors: 14 },
    { date: '10', visitors: 17 },
    { date: '11', visitors: 23 },
    { date: '12', visitors: 31 },
    { date: '13', visitors: 40 }];

const SimpleLineChart = () => (
    <LineChart
        data={myData}
        width={600}
        height={400}
        margin={{
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        }}
    >
        <XAxis dataKey="date" />
        <YAxis label="Visitantes" />
        <Line type="monotone" dataKey="visitors" stroke="#001529" activeDot={{ r: 5 }} />
        <Tooltip />
    </LineChart>
);

export default SimpleLineChart;
