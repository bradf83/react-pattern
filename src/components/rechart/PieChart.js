import React, {useState} from 'react';
import {Pie, ResponsiveContainer, PieChart as RePie, Tooltip, Cell} from "recharts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart = () => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="flip-card-container" style={{height: '300px'}}>
            <div className={`flip-card ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(current => !current)}>
                <div className="flip-card-face flip-card__face--front">
                    <div className="row border rounded">
                        <div className="col-12 col-md-6" style={{height: 300}}>
                            <ResponsiveContainer>
                                <RePie>
                                    <Pie data={data} fill="#8884d8" nameKey="name" dataKey="value"
                                         label={(prop) => prop.name}>
                                        {data.map((entry, index) => <Cell key={`cell-${index}`}
                                                                          fill={COLORS[index % COLORS.length]}/>)}
                                    </Pie>
                                    <Tooltip/>
                                </RePie>
                            </ResponsiveContainer>
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <h6>Legend</h6>
                            <ul className="fa-ul">
                                {data.map((item, index) =>
                                    <li><span className="fa-li"><FontAwesomeIcon icon={faSquare}
                                                                                 style={{color: COLORS[index]}}/></span>{item.name}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flip-card-face flip-card__face--back mt-2 bg-white">
                    <div className="border rounded h-100 overflow-auto p-3">
                        <h4>Chart Data</h4>
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <caption>All of the data that made up the chart.</caption>
                                <thead>
                                    <tr className="bg-dark text-white"><th>Group</th><th>Value</th></tr>
                                </thead>
                                <tbody>
                                {data.map(record =>
                                    <tr key={record.name}>
                                        <td>{record.name}</td>
                                        <td>{record.value}</td>
                                    </tr>
                                )}
                                {data.map(record =>
                                    <tr key={record.name}>
                                        <td>{record.name}</td>
                                        <td>{record.value}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default PieChart;