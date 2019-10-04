import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import queryString from 'query-string';
import Description from "./Description";

const Visualization = () => {
    let location = useLocation();
    let history = useHistory();

    //TODO: Bugs
    // product query param not coming in
    // not updating query params in all cases

    //TODO: Query Param Questions ( ALT + 251)
    // On load wait for months to load √
    // If query month is found in months then load products for month √
    // If query product is found then load visualization  √

    //TODO: Switch to Reducer Pattern
    const [month, setMonth] = useState('');
    const [monthOptions, setMonthOptions] = useState([]);
    const [product, setProduct] = useState('');
    const [productOptions, setProductOptions] = useState([]);
    const [render, setRender] = useState(false);
    const [cardLayout, setCardLayout] = useState(true);

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
        } else {
            setProduct('');
            setProductOptions([]);
        }
    }, [month]); // Do anytime the month changes

    // useEffect(() => {
    //     history.push({
    //         pathname: location.pathname,
    //         search: `?month=${month}&product=${product}` // TODO: Make this smarter
    //     });
    // }, [month, product]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!(month === '' || product === '')){
            setRender(true);
        }
    };

    const handleChange = (event, setter) => {
        setter(event.target.value);
        setRender(false);
    };

    const missingParams = month === '' || product === '' || render === false;

    return (
        <>
            {!cardLayout && (
                <>
                    <section className="mt-2">
                        <div className="container">
                            <nav className="navbar navbar-dark bg-dark justify-content-between rounded-lg">
                                <div className="form-inline">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" checked={cardLayout} onChange={() => setCardLayout(current => !current)}
                                               id="js-card-layout"/>
                                        <label className="custom-control-label text-white" htmlFor="js-card-layout">Use card layout?</label>
                                    </div>
                                </div>
                                <form className="form-inline" onSubmit={handleSubmit}>
                                    <select className="form-control mr-2" autoFocus={true} value={month} onChange={(event) => handleChange(event, setMonth)}>
                                        <option value="">Select a Month</option>
                                        {monthOptions.map(option =>
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        )}
                                    </select>
                                    <select className="form-control mr-2" value={product} onChange={(event) => handleChange(event, setProduct)}>
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
                                    {/* If the path is wrong or they are at the root then redirect to visualization one*/}
                                    <Redirect to="/visualization/one"/>
                                </Switch>
                            )}
                        </div>
                    </section>
                </>
            )}

            {cardLayout && (
                <>
                    {/* Render using a card */}

                    <section className="mt-2">
                        <div className="container">
                            <div className="card">
                                <div className="card-header bg-dark text-white d-flex justify-content-between">
                                    <div className="form-inline">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" checked={cardLayout} onChange={() => setCardLayout(current => !current)}
                                                   id="js-card-layout"/>
                                                <label className="custom-control-label"
                                                       htmlFor="js-card-layout">Use card layout?</label>
                                        </div>
                                    </div>
                                    <form className="form-inline" onSubmit={handleSubmit}>
                                        <select className="form-control mr-2" autoFocus={true} value={month} onChange={(event) => handleChange(event, setMonth)}>
                                            <option value="">Select a Month</option>
                                            {monthOptions.map(option =>
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            )}
                                        </select>
                                        <select className="form-control mr-2" value={product} onChange={(event) => handleChange(event, setProduct)}>
                                            <option value="">Select a Product</option>
                                            {productOptions.map(option =>
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            )}
                                        </select>
                                        <button className="btn btn-primary">Render</button>
                                    </form>
                                </div>
                                <div className="card-body">
                                    {missingParams && (
                                        <div className="alert alert-info">
                                            Please select a month and product above and press <em>Render</em>.
                                        </div>
                                    )}
                                    {!missingParams && (
                                        <Switch>
                                            <Route path="/visualization/one">
                                                <One month={month} product={product} showDescription={false}/>
                                            </Route>
                                            <Route path="/visualization/two">
                                                <Two month={month} product={product} showDescription={false}/>
                                            </Route>
                                            {/* If the path is wrong or they are at the root then redirect to visualization one*/}
                                            <Redirect to="/visualization/one"/>
                                        </Switch>
                                    )}
                                </div>
                                <div className="card-footer text-muted">
                                    <Switch>
                                        <Route path="/visualization/one">
                                            <h6>Description One</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi distinctio ducimus earum, eligendi minus nihil non perspiciatis quo veritatis? Ab consectetur dolores eum expedita nemo voluptas voluptates! Repudiandae, sint!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi distinctio ducimus earum, eligendi minus nihil non perspiciatis quo veritatis? Ab consectetur dolores eum expedita nemo voluptas voluptates! Repudiandae, sint!</p>
                                        </Route>
                                        <Route path="/visualization/two">
                                            <h6>Description Two</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi distinctio ducimus earum, eligendi minus nihil non perspiciatis quo veritatis? Ab consectetur dolores eum expedita nemo voluptas voluptates! Repudiandae, sint!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi distinctio ducimus earum, eligendi minus nihil non perspiciatis quo veritatis? Ab consectetur dolores eum expedita nemo voluptas voluptates! Repudiandae, sint!</p>
                                        </Route>
                                        <Route/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
};

export default Visualization;
