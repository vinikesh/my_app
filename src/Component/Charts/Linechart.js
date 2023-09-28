import React from "react";
import data from "../../Appconstans/AreaChartData";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


export default function LineChartPlot(){
    return (


       <LineChart height={300} width={600} data={data} style={{display: "block", margin: "auto", marginTop: "20px"}}>
        <Line type="monotone" dataKey="uv" stroke="#2196F3">
        </Line>
        <Line type="monotone" dataKey="pv" stroke="red" strokeWidth={3} strokeOpacity={.2}>
        </Line>
        <Line type="monotone" dataKey="amt" stroke="blue">
        </Line>
        <CartesianGrid stroke="grey" /> 
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
       </LineChart>
    )
}