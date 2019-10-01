import React from 'react';
import {Bar} from "@nivo/bar";

// Example from Nivo Storybook, modified slightly
const HorizontalBarChart = () => {

    const data = [
        {
            "country": "AD",
            "hot dog": 75,
            "hot dogColor": "hsl(277, 70%, 50%)",
            "burger": 176,
            "burgerColor": "hsl(2, 70%, 50%)",
            "sandwich": 178,
            "sandwichColor": "hsl(124, 70%, 50%)",
            "kebab": 8,
            "kebabColor": "hsl(104, 70%, 50%)",
            "fries": 200,
            "friesColor": "hsl(292, 70%, 50%)",
            "donut": 60,
            "donutColor": "hsl(303, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 82,
            "hot dogColor": "hsl(346, 70%, 50%)",
            "burger": 149,
            "burgerColor": "hsl(23, 70%, 50%)",
            "sandwich": 38,
            "sandwichColor": "hsl(155, 70%, 50%)",
            "kebab": 38,
            "kebabColor": "hsl(190, 70%, 50%)",
            "fries": 74,
            "friesColor": "hsl(344, 70%, 50%)",
            "donut": 125,
            "donutColor": "hsl(354, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 191,
            "hot dogColor": "hsl(333, 70%, 50%)",
            "burger": 196,
            "burgerColor": "hsl(275, 70%, 50%)",
            "sandwich": 86,
            "sandwichColor": "hsl(322, 70%, 50%)",
            "kebab": 152,
            "kebabColor": "hsl(327, 70%, 50%)",
            "fries": 99,
            "friesColor": "hsl(206, 70%, 50%)",
            "donut": 1,
            "donutColor": "hsl(223, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 9,
            "hot dogColor": "hsl(127, 70%, 50%)",
            "burger": 148,
            "burgerColor": "hsl(283, 70%, 50%)",
            "sandwich": 161,
            "sandwichColor": "hsl(102, 70%, 50%)",
            "kebab": 47,
            "kebabColor": "hsl(317, 70%, 50%)",
            "fries": 1,
            "friesColor": "hsl(94, 70%, 50%)",
            "donut": 23,
            "donutColor": "hsl(160, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 83,
            "hot dogColor": "hsl(297, 70%, 50%)",
            "burger": 132,
            "burgerColor": "hsl(324, 70%, 50%)",
            "sandwich": 113,
            "sandwichColor": "hsl(214, 70%, 50%)",
            "kebab": 166,
            "kebabColor": "hsl(296, 70%, 50%)",
            "fries": 196,
            "friesColor": "hsl(276, 70%, 50%)",
            "donut": 36,
            "donutColor": "hsl(278, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 78,
            "hot dogColor": "hsl(106, 70%, 50%)",
            "burger": 108,
            "burgerColor": "hsl(68, 70%, 50%)",
            "sandwich": 75,
            "sandwichColor": "hsl(107, 70%, 50%)",
            "kebab": 140,
            "kebabColor": "hsl(177, 70%, 50%)",
            "fries": 23,
            "friesColor": "hsl(43, 70%, 50%)",
            "donut": 156,
            "donutColor": "hsl(163, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 119,
            "hot dogColor": "hsl(80, 70%, 50%)",
            "burger": 181,
            "burgerColor": "hsl(74, 70%, 50%)",
            "sandwich": 10,
            "sandwichColor": "hsl(88, 70%, 50%)",
            "kebab": 67,
            "kebabColor": "hsl(232, 70%, 50%)",
            "fries": 11,
            "friesColor": "hsl(241, 70%, 50%)",
            "donut": 10,
            "donutColor": "hsl(116, 70%, 50%)"
        }
    ]

    return (
        <div className="my-2">
            <h6>Horizontal Bar From Nivo</h6>
            <Bar
                width={900}
                height={500}
                margin={{top: 60, right: 80, bottom: 60, left: 80}}
                data={data}
                indexBy="country"
                keys={['hot dog', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']}
                padding={0.2}
                layout="horizontal"
                enableGridY={false}
                enableGridX={true}
                labelSkipWidth={16}
            />
        </div>
    )
};

export default HorizontalBarChart;