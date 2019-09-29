import React, {useEffect} from 'react';
import * as d3 from 'd3';

/**
 * Built based on the tutorial found here: https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/
 * Added my own customizations based on the learning.
 * @returns {*}
 * @constructor
 */

const D3BarChartTwo = ({label}) => {

    const dataColours = [
        '#97233F', // Cardinals Red
        '#FFB612', // Cardinals Yellow
        '#006778', // Jaguars Teal
        '#D3BC8D', // New Orleans Gold
        '#125740', // Jets Green
        '#4F2683', // Vikings Purple
        '#008E97', // Miami Aqua
        '#FC4C02', // Miami Orange
        '#005778', // Miami Blue
        '#000000' // Black
    ];

    const sample = [
        {language: 'Rust', value: '78'},
        {language: 'Kotlin', value: '75'},
        {language: 'Python', value: '67'},
        {language: 'Typescript', value: '66'},
        {language: 'Go', value: '65'},
        {language: 'Swift', value: '64'},
        {language: 'Javascript', value: '62'},
        {language: 'C#', value: '61'},
        {language: 'F#', value: '61'},
        {language: 'Clojure', value: '55'},
    ];

    const drawChart = () => {
        const margin = 60;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;

        const svg = d3.select('#someChart').append("svg")
            .attr("width", 1000)
            .attr("height", 600);

        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);

        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 100]);

        chart.append('g')
            .call(d3.axisLeft(yScale));

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(sample.map((s) => s.language))
            .padding(0.2);

        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        chart.selectAll()
            .data(sample)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.value))
            .attr('height', (s) => height - yScale(s.value))
            .attr('width', xScale.bandwidth())
            .attr("fill", (d, i) => dataColours[i]) // Select a colour from our predefined colours
            .on('click', function(actual, i){
                alert(`The ${actual.language} programming language is liked by ${actual.value}% of people.`);
            });

        // Grid lines for the X Axis
        // chart.append('g')
        //     .attr('class', 'grid')
        //     .attr('transform', `translate(0, ${height})`)
        //     .call(d3.axisBottom()
        //         .scale(xScale)
        //         .tickSize(-height, 0, 0)
        //         .tickFormat(''))

        // Grid Lines for the Y Axis
        // chart.append('g')
        //     .attr('class', 'grid')
        //     .call(d3.axisLeft()
        //         .scale(yScale)
        //         .tickSize(-width, 0, 0)
        //         .tickFormat(''))

        // Y Axis Label
        svg.append('text')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Like(%)');

        // X Axis Label
        svg.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Like % For Programming Languages')

        svg.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', height + 100)
            .attr('text-anchor', 'middle')
            .text('Languages')
    };

    useEffect(() => {
        drawChart();
    }, []);

    return (
        <div>
            <h6>{label}</h6>
            <div id="someChart"></div>
        </div>
    )
};

export default D3BarChartTwo;