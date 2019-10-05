import React, {useEffect, useReducer} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import queryString from 'query-string';

const Visualization = () => {
    let location = useLocation();
    let history = useHistory();

    //TODO: Bugs
    // product query param not coming in √
    // not updating query params in all cases √

    //TODO: Query Param Questions ( ALT + 251)
    // On load wait for months to load √
    // If query month is found in months then load products for month √
    // If query product is found then load visualization  √

    //TODO: Switch to Reducer Pattern √

    /**
     * Initial state
     * @type {{product: string, productOptions: Array, month: string, monthOptions: Array, render: boolean, mounted: boolean}}
     */
    const initialState = {
        month: '',
        monthOptions: [],
        product: '',
        productOptions: [],
        render: false,
        mounted: false,
    };

    /**
     * Return the valueToFind if an option with the valueProp is found in the list. Escapes early if the options list
     * is undefined or empty.  Also escapes early if the valueToFind is undefined or empty string.
     * @param options - an array of options.
     * @param valueToFind - the value to find in the list.
     * @param valueProp - default 'value' can be changed if needed.
     * @returns {string}
     */
    const selectedOptionIfExists = (options, valueToFind, valueProp = 'value') => {
        if(options === undefined || options.length === 0  || valueToFind === undefined || valueToFind === ''){
            return '';
        }
        return options.find(option => option[valueProp] === valueToFind) !== undefined ? valueToFind : '';
    };

    function reducer(state, action) {
        switch(action.type) {
            case 'MOUNTED':
                return {...state, mounted: true};
            case 'RENDER_VISUALIZATION':
                return {...state, render: true};
            case 'SELECT_FORM_VALUE':
                return {...state, [action.name]:action.value, render: false};
            case 'UPDATE_OPTIONS':
                return {...state, [action.name]:action.value};
            case 'SET_STATE':
                return {...state, ...action.state};
            default:
                console.log(action);
                throw new Error('An error occurred in the visualization reducer.');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    /*
    * Initialize state and set mounted to true
    * - Take in query params and set form state
    */
    useEffect(() => {
        let queryParams = queryString.parse(location.search);

        //TODO: Async call
        // Load State on mount;
        const monthOptions = [
            {value: '2019-01', label: 'January 2019'},
            {value: '2019-02', label: 'February 2019'}
        ];
        let selectedMonth = selectedOptionIfExists(monthOptions, queryParams.month);
        let productOptions = determineFakeApiOptions(selectedMonth);
        let selectedProduct = selectedOptionIfExists(productOptions, queryParams.product);

        //TODO: Determine render from query parameter.
        // This is a little different than an API will work but same idea
        dispatch({
            type: 'SET_STATE',
            state: {
                monthOptions,
                month: selectedMonth,
                productOptions,
                product: selectedProduct,
                mounted: true,
            }
        });
        // Hiding warning as I expect this call to run only once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Build fake product options based on the month passed in
     * @param month
     * @returns {Array}
     */
    const determineFakeApiOptions = (month) => {
        let options = [];
        if (month === '2019-01') {
            options.push({value: '1', label: 'Crayons'});
            options.push({value: '2', label: 'Pencils'});
        }
        if (month === '2019-02') {
            options.push({value: '2', label: 'Pencils'});
            options.push({value: '3', label: 'Pens'});
        }
        return options;
    };

    /*
    * Update product list when the month changes
    */
    useEffect(() => {
        if(state.mounted) {
            let options = [];
            if (state.month !== '') {
                options = determineFakeApiOptions(state.month);
            }

            //TODO: This logic could move inside of the reducer, when changing options list
            let selectedProduct = selectedOptionIfExists(options, state.product);
            dispatch({type: 'UPDATE_OPTIONS', name: 'productOptions', value: options});
            dispatch({type: 'SELECT_FORM_VALUE', name: 'product', value: selectedProduct});
        }
    }, [state.month, state.mounted]); // Do anytime the month changes

    useEffect(() => {
        if(state.mounted) {
            //TODO: Determine if render should be enabled.
            //TODO: put history push inside of a useCallback, I think...
            history.push({
                pathname: location.pathname,
                search: `?month=${state.month}&product=${state.product}` // TODO: Make this smarter
            });
        }
    }, [state.month, state.product, state.mounted]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!(state.month === '' || state.product === '')){
            dispatch({type: 'RENDER_VISUALIZATION'});
        }
    };

    const handleChange = (event) => {
        dispatch({type: 'SELECT_FORM_VALUE', name: event.target.name, value: event.target.value});
    };

    const missingParams = state.month === '' || state.product === '' || state.render === false;

    return (
        <>
            <section className="mt-2">
                <div className="container">
                    <div className="card">
                        <div className="card-header bg-dark text-white d-flex justify-content-end">
                            <form className="form-inline" onSubmit={handleSubmit}>
                                <select className="form-control mr-2" autoFocus={true} name="month" value={state.month} onChange={handleChange}>
                                    <option value="">Select a Month</option>
                                    {state.monthOptions.map(option =>
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    )}
                                </select>
                                <select className="form-control mr-2" name="product" value={state.product} onChange={handleChange}>
                                    <option value="">Select a Product</option>
                                    {state.productOptions.map(option =>
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
                                        <One month={state.month} product={state.product} showDescription={false}/>
                                    </Route>
                                    <Route path="/visualization/two">
                                        <Two month={state.month} product={state.product} showDescription={false}/>
                                    </Route>
                                    {/* If the path is wrong or they are at the root then redirect to visualization one*/}
                                    <Redirect to="/visualization/one"/>
                                </Switch>
                            )}
                        </div>
                        {/* TODO: Still shows description area if at '/visualization' */}
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
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Visualization;
