import React from 'react';
import ReactRough, {Circle, Line} from "react-rough";

const Lines = () => {
    return (
        <div className="border rounded bg-white p-3">
            <h4>Lines</h4>
            <ReactRough width={400} height={150}>
                <Circle points={[50, 50, 20]} fill="red"/>
                <Circle points={[130, 50, 20]} fill="red"/>
                <Circle points={[210, 50, 20]} fill="red"/>
                <Circle points={[290, 50, 20]} fill="red"/>

                <Circle points={[90, 100, 20]} fill="blue"/>
                <Circle points={[170, 100, 20]} fill="blue"/>
                <Circle points={[250, 100, 20]} fill="blue"/>
                <Circle points={[330, 100, 20]} fill="blue"/>

                <Line points={[60, 45, 120, 45]} fill="black"/>
                <Line points={[60, 55, 120, 55]} fill="black"/>

                <Line points={[140, 45, 200, 45]} fill="black"/>
                <Line points={[140, 55, 200, 55]} fill="black"/>

                <Line points={[220, 45, 280, 45]} fill="black"/>
                <Line points={[220, 55, 280, 55]} fill="black"/>

                <Line points={[100, 95, 160, 95]} fill="black"/>
                <Line points={[100, 105, 160, 105]} fill="black"/>

                <Line points={[180, 95, 240, 95]} fill="black"/>
                <Line points={[180, 105, 240, 105]} fill="black"/>

                <Line points={[260, 95, 320, 95]} fill="black"/>
                <Line points={[260, 105, 320, 105]} fill="black"/>

                {/* Connect First Two With Angle */}
                {/* <Line points={[58,58, 90, 90]} fill="black"/>
            <Line points={[45,60, 80, 95]} fill="black"/> */}

                <Line points={[220, 57, 250, 90]} fill="black"/>
                <Line points={[210, 60, 240, 95]} fill="black"/>
            </ReactRough>
        </div>
    )
};

export default Lines;