import React from 'react';
import Navbar from "./components/Navbar";
import PublicWelcome from "./components/PublicWelcome";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Charts from "./components/Charts";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/" component={PublicWelcome}/>
                <Route path="/charts" component={Charts}/>
            </Switch>
        </Router>
    );
}

export default App;
