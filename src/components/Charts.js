import React from 'react';
import ContainerContent from "./ContainerContent";
import D3BarChart from "./d3/D3BarChart";


const Charts = () => {
    return (
        <ContainerContent>
            <h5>Charts</h5>
            <D3BarChart chartId="myChart" data={[12, 5, 6, 6, 9, 10]} width={700} height={150} dataMultiplier={10}/>
            <D3BarChart chartId="myChart2" data={[12, 5, 6, 6, 9, 10]} width={350} height={150} dataMultiplier={5}/>
        </ContainerContent>
    )
};

export default Charts;