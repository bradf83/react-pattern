import React, {useState} from 'react';
import {Route, Switch, useLocation, useParams} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import queryString from 'query-string';

const Visualization = () => {
    let location = useLocation();

    // Retrieve Query Params
    let queryParams = queryString.parse(location.search);

    //TODO: Query Param Questions
    // On load wait for months to load
    // If query month is found in months then load products for month
    // If query product is found then load visualization
    // What to do if query param is not in select list
    // How to update query params?

    //TODO: Switch to Reducer Pattern
    const [month, setMonth] = useState(queryParams.month !== undefined ? queryParams.month : '');
    const [product, setProduct] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <section className="mt-1">
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark justify-content-end rounded-lg">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <select className="form-control mr-2" autoFocus={true} value={month} onChange={(event) => setMonth(event.target.value)}>
                                <option value="">Select a Month</option>
                                <option value="2019-01">January 2019</option>
                            </select>
                            <select className="form-control mr-2" value={product} onChange={(event) => setProduct(event.target.value)}>
                                <option value="">Select a Product</option>
                                <option value="1">Crayons</option>
                            </select>
                            <button className="btn btn-primary">Render</button>
                        </form>
                    </nav>
                </div>
            </section>

            <section className="mt-1">
                <div className="container">
                    <Switch>
                        <Route path="/visualization/one">
                            <One month={month} product={product}/>
                        </Route>
                        <Route path="/visualization/two">
                            <Two month={month} product={product}/>
                        </Route>
                        <Route>
                            <div className="alert alert-info">
                                Please select a month and product above and press <em>Render</em>.
                            </div>
                        </Route>
                    </Switch>

                </div>
            </section>
        </>
    )
};

export default Visualization;
