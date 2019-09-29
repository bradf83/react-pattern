import React from 'react';
import ContainerContent from "./ContainerContent";
import D3BarChart from "./d3/D3BarChart";
import D3BarChartTwo from "./d3/D3BarChartTwo";


const Charts = () => {
    return (
        <ContainerContent>
            <h5>Charts</h5>
            <D3BarChart label="Example of a basic bar chart" chartId="myChart" data={[12, 5, 6, 6, 9, 10]} width={700} height={150} dataMultiplier={10}/>
            <D3BarChart label="Example of a basic bar chart, scaled slightly smaller" chartId="myChart2" data={[12, 5, 6, 6, 9, 10]} width={350} height={150} dataMultiplier={5}/>
            <D3BarChartTwo label="Example of a bar chart with axes/labels/events"/>
        </ContainerContent>
    )
};

export default Charts;