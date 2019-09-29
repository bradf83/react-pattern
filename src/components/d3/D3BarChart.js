import React, {useEffect} from 'react';
import * as d3 from 'd3';

/**
 * Create a bar chart based on a data set.
 * @param chartId - the HTML id for the chart container
 * @param data - the array of data to be used. Eg [10, 20, 30, 5]
 * @param width - the width of the chart
 * @param height - the height of the chart
 * @param dataMultiplier - the multiplier for the data to make the chart bigger or smaller (revisit this)
 * @returns {*}
 * @constructor
 */
const D3BarChart = ({chartId, data, width, height, dataMultiplier, label}) => {

    const dataColours = [
        '#97233F', // Cardinals Red
        '#FFB612', // Cardinals Yellow
        '#006778', // Jaguars Teal
        '#D3BC8D', // New Orleans Gold
        '#125740', // Jets Green
        '#4F2683', // Vikings Purple
        '#008E97', // Miami Aqua
        '#FC4C02', // Miami Orange
        '#005778' // Miami Blue
    ];

    const drawChart = () => {

        const svg = d3.select(`#${chartId}`)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70) // Position the bar from left to right with 5 pixels (70 - 65) spacing.
            .attr("y", (d, i) => height - dataMultiplier * d) // Start the bar from the height of the bar relative to the container (300 - 120 for the first element)
            .attr("width", 65)
            .attr("height", (d, i) => d * dataMultiplier) // The height, multiplied by 10 so that the chart is not tiny.
            .attr("fill", (d, i) => dataColours[i]) // Select a colour from our predefined colours
    };

    // Only draw the chart on mount
    useEffect(() => {
        drawChart();
    }, []);

    return (
        <div className="my-2">
            <h6>{label}</h6>
            <div id={chartId}/>
        </div>
    )
};

export default D3BarChart;