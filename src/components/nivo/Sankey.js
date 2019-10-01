import React from 'react';
import {ResponsiveSankey} from "@nivo/sankey";

// Example from Nivo Website, modified slightly
const Sankey = () => {

    const data = {
        "nodes": [
            {
                "id": "John",
                "color": "hsl(187, 70%, 50%)"
            },
            {
                "id": "Raoul",
                "color": "hsl(323, 70%, 50%)"
            },
            {
                "id": "Jane",
                "color": "hsl(104, 70%, 50%)"
            },
            {
                "id": "Marcel",
                "color": "hsl(293, 70%, 50%)"
            },
            {
                "id": "Ibrahim",
                "color": "hsl(300, 70%, 50%)"
            },
            {
                "id": "Junko",
                "color": "hsl(229, 70%, 50%)"
            }
        ],
        "links": [
            {
                "source": "Marcel",
                "target": "John",
                "value": 184
            },
            {
                "source": "Ibrahim",
                "target": "John",
                "value": 63
            },
            {
                "source": "Ibrahim",
                "target": "Jane",
                "value": 21
            },
            {
                "source": "Ibrahim",
                "target": "Marcel",
                "value": 138
            },
            {
                "source": "Jane",
                "target": "John",
                "value": 118
            },
            {
                "source": "John",
                "target": "Junko",
                "value": 21
            },
            {
                "source": "Raoul",
                "target": "Ibrahim",
                "value": 28
            }
        ]
    };

    return (
        <div className="my-2" style={{width: 1000, height: 500}}>
            <h6>Sankey Chart with Nivo</h6>
            <ResponsiveSankey
                data={data}
                margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
                align="justify"
                colors={{ scheme: 'category10' }}
                nodeOpacity={1}
                nodeThickness={18}
                nodeInnerPadding={3}
                nodeSpacing={24}
                nodeBorderWidth={0}
                nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                linkOpacity={0.5}
                linkHoverOthersOpacity={0.1}
                enableLinkGradient={true}
                labelPosition="outside"
                labelOrientation="vertical"
                labelPadding={16}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                animate={true}
                motionStiffness={140}
                motionDamping={13}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 130,
                        itemWidth: 100,
                        itemHeight: 14,
                        itemDirection: 'right-to-left',
                        itemsSpacing: 2,
                        itemTextColor: '#999',
                        symbolSize: 14,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
};

export default Sankey;