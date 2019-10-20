import React from 'react';
import Navbar from "./components/Navbar";
import PublicWelcome from "./components/PublicWelcome";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Charts from "./components/Charts";
import Visualization from "./components/visualization/Visualization";
import LogRoute from "./components/logging/LogRoute";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/" component={PublicWelcome}/>
                <Route path="/charts" component={Charts}/>
                <Route path="/visualization">
                    <Visualization/>
                </Route>
            </Switch>
            <LogRoute/>
        </Router>
    );
}

export default App;
