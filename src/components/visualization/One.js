import React, {useEffect, useState} from 'react';
import {Bar, BarChart, XAxis, YAxis} from "recharts";
import Loading from "./Loading";
import NoData from "./NoData";

const One = ({month, product}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        // TODO: Data based on params
        setData([
            {label: 'Red', amount: Math.round(Math.random() * 100)},
            {label: 'Blue', amount: Math.round(Math.random() * 100)},
            {label: 'Orange', amount: Math.round(Math.random() * 100)},
            {label: 'Green', amount: Math.round(Math.random() * 100)}
        ]);
    }, [month, product]);

    if(data === undefined){
        return (<Loading/>)
    }

    if(data.length === 0){
        return (<NoData/>)
    }

    return (
        <>
            <h5>Visualization One</h5>
            <BarChart width={500} height={300} layout="vertical" data={data}>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="label"/>
                <Bar dataKey="amount" fill="#8884d8" barSize={10} />
            </BarChart>
        </>
    )
};

export default One;