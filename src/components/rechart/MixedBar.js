import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: 'Page A', total: 4000, minus: 2400, result: 1600,
    },
    {
        name: 'Page B', total: 3000, minus: 1398, result: 1602,
    },
    {
        name: 'Page C', total: 9800, minus: 2000, result: 7800,
    },
    {
        name: 'Page D', total: 3908, minus: 2780, result: 1128,
    },
    {
        name: 'Page E', total: 4800, minus: 1890, result: 2910,
    },
    {
        name: 'Page F', total: 3800, minus: 2390, result: 1410,
    },
    {
        name: 'Page G', total: 3490, minus: 0, result: 3490,
    },
];

const MixedBar = () => {
    return (
        <>
            <div className="alert alert-info mt-3">
                <strong>Few bugs still</strong>
                <ul>
                    <li>Legend label incorrect</li>
                    <li>Tooltip label incorrect</li>
                </ul>
            </div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis className="bg-info" dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="minus" stackId="a" fill="#ffc107"/>
                <Bar dataKey="result" stackId="a" fill="#dc3545"/>
                <Bar dataKey="result" fill="#28a745"/>
            </BarChart>
        </>
    )
};

export default MixedBar;