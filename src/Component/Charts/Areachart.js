import React from "react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import data from "../../Appconstans/AreaChartData";
import "./Areachart.css";

export default function AreaChartPlot() {

    return (
        <ResponsiveContainer width="100%" height={400} className="container" >
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1={0} x2={0} y1={0} y2={1}>
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}></stop>
                    </linearGradient>
                </defs>
                <Area dataKey={"uv"} fill="url(#color)" />
                <Area dataKey={"pv"} fill="url(#color)" />
                <XAxis dataKey={"name"} axisLine={false} tickLine={false}/>
                <YAxis axisLine={false} tickLine={false}/>
                <Tooltip />
                <Legend />
                <CartesianGrid vertical={false} opacity={0.1}/>
            </AreaChart>
        </ResponsiveContainer>
    )
}