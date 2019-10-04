import React, {useEffect, useState} from 'react';
import Description from "./Description";
import {Pie, PieChart} from "recharts";
import Loading from "./Loading";
import NoData from "./NoData";

const Two = ({month, product}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        // Example of no data returned
        if(product === '3'){
            setData([]);
        } else {
            setData([
                {label: 'Red', amount: Math.round(Math.random() * 100)},
                {label: 'Blue', amount: Math.round(Math.random() * 100)},
                {label: 'Orange', amount: Math.round(Math.random() * 100)},
                {label: 'Green', amount: Math.round(Math.random() * 100)}
            ]);
        }
    }, [month, product]);

    if(data === undefined){
        return (<Loading/>)
    }

    if(data.length === 0){
        return (<NoData/>)
    }

    return (
        <>
            <h5>Visualization Two</h5>
            <PieChart width={500} height={300}>
                <Pie dataKey="amount" nameKey="label" data={data} label={true} fill="#0076B6"/>
            </PieChart>
            <Description name="Something Two"/>
        </>
    )
};

export default Two;