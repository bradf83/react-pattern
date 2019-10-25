import React from 'react';
import ReactRough, {Line, Rectangle} from "react-rough";

const Buckets = () => {
    return (
        <div className="border rounded bg-white p-3">
            <h4>Buckets</h4>
            <ReactRough width={500} height={125}>
                {/* Bucket 1 */}
                <Line points={[10, 10, 10, 110]} fill="black"/>
                <Line points={[110, 10, 110, 110]} fill="black"/>
                <Line points={[10, 110, 110, 110]} fill="black"/>

                {/* Fill it 50% */}
                <Rectangle points={[10, 60, 100, 50]} fill="red"/>

                {/* Bucket 2 */}

                <Line points={[160, 10, 160, 110]} fill="black"/>
                <Line points={[260, 10, 260, 110]} fill="black"/>
                <Line points={[160, 110, 260, 110]} fill="black"/>

                {/* Fill it 80% */}
                <Rectangle points={[160, 30, 100, 80]} fill="red"/>

                {/* Bucket 3 */}

                <Line points={[310, 10, 310, 110]} fill="black"/>
                <Line points={[410, 10, 410, 110]} fill="black"/>
                <Line points={[310, 110, 410, 110]} fill="black"/>

                {/* Fill it 15% Blue */}
                {/* Fill it 65% Red */}
                <Rectangle points={[310, 110, 100, -65]} fill="blue"/>
                <Rectangle points={[310, 45, 100, -15]} fill="red"/>
            </ReactRough>
        </div>
    )
};

export default Buckets;