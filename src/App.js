import React from 'react';
import Navbar from "./components/Navbar";
import PublicWelcome from "./components/PublicWelcome";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Graph from "./components/Graph";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/" component={PublicWelcome}/>
                <Route path="/graph" component={Graph}/>
            </Switch>
        </Router>
    );
}

export default App;
