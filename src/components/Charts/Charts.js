import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, TrendingUp } from "recharts";

export default function Charts() {
	const data = [
		{ name: "Page A", uv: 0 },
		{ name: "Page B", uv: 1 },
		{ name: "Page C", uv: 3 },
		{ name: "Page D", uv: 2 },
	];
	return (
		<div>
			<LineChart width={400} height={400} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
			</LineChart>

			<LineChart width={400} height={400} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
			</LineChart>

			<LineChart width={400} height={400} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="name" />
			</LineChart>

			<LineChart width={400} height={400} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
				<XAxis dataKey="name" />
				<YAxis/>
			</LineChart>
		</div>
	);
}
