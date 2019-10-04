import React, {useEffect, useState} from 'react';
import Description from "./Description";
import {Pie, PieChart} from "recharts";

const Two = ({month, product}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        setData([
            {label: 'Red', amount: 10},
            {label: 'Blue', amount: 5},
            {label: 'Orange', amount: 20},
            {label: 'Green', amount: 44}
        ]);
    }, [month, product]);

    if(data === undefined){
        return (<div>Loading...</div>)
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