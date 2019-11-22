import React from 'react';
import Navbar from "./components/Navbar";
import PublicWelcome from "./components/PublicWelcome";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Charts from "./components/Charts";
import Visualization from "./components/visualization/Visualization";
import LogRoute from "./components/logging/LogRoute";
import Rough from "./components/rough";
import Framer from "./components/framer";
import Toolbar from "./components/toolbar/Toolbar";
import HookExample from "./components/queryParams/HookExample";

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
                <Route path="/reactRough">
                    <Rough/>
                </Route>
                <Route path="/framer">
                    <Framer/>
                </Route>
                <Route path="/toolbar">
                    <Toolbar/>
                </Route>
                <Route path="/queryParams">
                    <HookExample/>
                </Route>
            </Switch>
            <LogRoute/>
        </Router>
    );
}

export default App;
