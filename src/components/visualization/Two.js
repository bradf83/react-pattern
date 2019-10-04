import React from 'react';
import Description from "./Description";

const Two = ({month, product}) => {
    return (
        <>
            <h5>Visualization Two</h5>
            <ul className="list-unstyled">
                <li>Month: {month}</li>
                <li>Product: {product}</li>
            </ul>
            <Description name="Something Two"/>
        </>
    )
};

export default Two;