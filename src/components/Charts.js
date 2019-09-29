import React from 'react';
import ContainerContent from "./ContainerContent";
import D3BarChart from "./d3/D3BarChart";
import D3BarChartTwo from "./d3/D3BarChartTwo";
import {NavLink, Route, Switch} from "react-router-dom";
import TinyBar from "./rechart/TinyBar";
import HorizontalBar from "./rechart/HorizontalBar";


const Charts = () => {
    return (
        <ContainerContent>
            <h5>Charts</h5>
            <p>Please select a chart below.</p>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/charts/basic">Basic Bar Chart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/charts/basicScaled">Basic Bar Chart Scaled Smaller</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/charts/barWithDetails">Bar Chart With Details</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/charts/rechartsTinyBar">Recharts Tiny Bar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/charts/rechartsHorizontalBar">Recharts Horizontal Bar</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/charts/basic" component={Basic}/>
                <Route path="/charts/basicScaled" component={BasicScaledSmaller}/>
                <Route path="/charts/barWithDetails" render={() =>
                    <D3BarChartTwo label="Example of a bar chart with axes/labels/events"/>
                }/>
                <Route path="/charts/rechartsTinyBar" component={TinyBar}/>
                <Route path="/charts/rechartsHorizontalBar" component={HorizontalBar}/>
            </Switch>

        </ContainerContent>
    )
};

//TODO: Why was it not rendering properly with the code below.

/*

<Route path="/charts/basic" render={() =>
    <D3BarChart label="Example of a basic bar chart" chartId="myChart" data={[12, 5, 6, 6, 9, 10]} width={700} height={150} dataMultiplier={10}/>
}/>
<Route path="/charts/basicScaled" render={() =>
    <D3BarChart label="Example of a basic bar chart, scaled slightly smaller" chartId="myChart2" data={[12, 5, 6, 6, 9, 10]} width={350} height={150} dataMultiplier={5}/>
}/>

 */

// Had to create this component wrappers other wise it was only rendering one of the basic charts, I must be doing something wrong, or misunderstanding something, previous route
//  code can be found right above this.
const Basic = () => {
    return (
        <D3BarChart label="Example of a basic bar chart" chartId="myChart" data={[12, 5, 6, 6, 9, 10]} width={700} height={150} dataMultiplier={10}/>
    )
};

const BasicScaledSmaller = () => {
    return (
        <D3BarChart label="Example of a basic bar chart, scaled slightly smaller" chartId="tomo" data={[12, 5, 6, 6, 9, 10]} width={350} height={150} dataMultiplier={5}/>
    )
};

export default Charts;