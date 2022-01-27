import React, { useState } from "react";
import "../../styles/index.css";
//create your first component
const TrafficLigth = () => {
	const [color, setcolor] = useState("red");

	return (
		<div className="trafficlight">
			<div className="light red on"></div>
			<div className="light yellow"></div>
			<div className="light green"></div>
		</div>
	);
};

export default TrafficLigth;
