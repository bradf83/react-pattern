import React from 'react';
import Description from "./Description";

const One = ({month, product}) => {
    return (
        <>
            <h5>Visualization One</h5>
            <ul className="list-unstyled">
                <li>Month: {month}</li>
                <li>Product: {product}</li>
            </ul>
            <Description name="Something One"/>
        </>
    )
};

export default One;