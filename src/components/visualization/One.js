import React, {useEffect, useState} from 'react';
import Description from "./Description";
import {Bar, BarChart, XAxis, YAxis} from "recharts";

const One = ({month, product}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        // TODO: Data based on params
        setData([
            {label: 'Red', amount: 10},
            {label: 'Blue', amount: 5},
            {label: 'Orange', amount: 20},
            {label: 'Green', amount: 44}
        ]);
    }, [month, product]); // TODO: Changing based on month/product change, instead want to change based on Render Click

    if(data === undefined){
        return (<div>Loading...</div>) // TODO: Custom loading component
    }

    return (
        <>
            <h5>Visualization One</h5>
            <BarChart width={500} height={300} layout="vertical" data={data}>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="label"/>
                <Bar dataKey="amount" fill="#8884d8" barSize={10} />
            </BarChart>
            <Description name="Something One"/>
        </>
    )
};

export default One;