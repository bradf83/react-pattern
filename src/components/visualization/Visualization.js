import React, {useState, useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import queryString from 'query-string';

const Visualization = () => {
    let location = useLocation();

    //TODO: Query Param Questions ( ALT + 251)
    // On load wait for months to load √
    // If query month is found in months then load products for month √
    // If query product is found then load visualization  √
    // What to do if query param is not in select list. Don't render the visualization, info message shown
    // How to update query params?

    //TODO: Switch to Reducer Pattern
    const [month, setMonth] = useState('');
    const [monthOptions, setMonthOptions] = useState([]);
    const [product, setProduct] = useState('');
    const [productOptions, setProductOptions] = useState([]);

    useEffect(() => {
        //TODO: replace with real API
        const options = [
            {value: '2019-01', label: 'January 2019'},
            {value: '2019-02', label: 'February 2019'}
        ];

        setMonthOptions(options);

        if(options.length > 0){
            let queryParams = queryString.parse(location.search);

            if(queryParams.month !== undefined){
                let found = options.find(option => option.value === queryParams.month);
                if(found !== undefined){
                    setMonth(queryParams.month);
                }
            }
        }
    }, []); // Load months once on load

    useEffect(() => {
        if(month !== ''){
            //TODO: Real API
            let options = [];
            if(month === '2019-01'){
                options.push({value: '1', label: 'Crayons'});
                options.push({value: '2', label: 'Pencils'});
            }
            if(month === '2019-02'){
                options.push({value: '2', label: 'Pencils'});
                options.push({value: '3', label: 'Pens'});
            }
            setProductOptions(options);

            if(options.length > 0){
                let queryParams = queryString.parse(location.search);
                if(queryParams.product !== undefined){
                    let found = options.find(option => option.value === queryParams.product);
                    if(found !== undefined){
                        setProduct(queryParams.product);
                        // TODO: If came from URL/Bookmark it would be nice to fire a render here.
                    }
                }
            }
        }
    }, [month]); // Do anytime the month changes

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const missingParams = month === '' || product === '';

    return (
        <>
            <section className="mt-1">
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark justify-content-end rounded-lg">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <select className="form-control mr-2" autoFocus={true} value={month} onChange={(event) => setMonth(event.target.value)}>
                                <option value="">Select a Month</option>
                                {monthOptions.map(option =>
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                )}
                            </select>
                            <select className="form-control mr-2" value={product} onChange={(event) => setProduct(event.target.value)}>
                                <option value="">Select a Product</option>
                                {productOptions.map(option =>
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                )}
                            </select>
                            <button className="btn btn-primary">Render</button>
                        </form>
                    </nav>
                </div>
            </section>

            <section className="mt-1">
                <div className="container">
                    {missingParams && (
                        <div className="alert alert-info">
                            Please select a month and product above and press <em>Render</em>.
                        </div>
                    )}
                    {!missingParams && (
                        <Switch>
                            <Route path="/visualization/one">
                                <One month={month} product={product}/>
                            </Route>
                            <Route path="/visualization/two">
                                <Two month={month} product={product}/>
                            </Route>
                        </Switch>
                    )}
                </div>
            </section>
        </>
    )
};

export default Visualization;
