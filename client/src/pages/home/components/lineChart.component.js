import React from 'react';
import propTypes from 'prop-types';
import {
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const SimpleLineChart = ({ data, width, height }) => (
    <LineChart
        data={data}
        width={width}
        height={height}
        margin={{
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        }}
    >
        <XAxis dataKey="date" />
        <YAxis
            label={{
                value: 'KW',
                position: 'insideLeft',
                angle: 0,
                dy: height / 2,
            }}
            height={height}
        />
        <Line type="monotone" dataKey="power" stroke="#001529" activeDot={{ r: 5 }} />
        <Tooltip />
    </LineChart>
);

SimpleLineChart.propTypes = {
    data: propTypes.array.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
};

export default SimpleLineChart;
