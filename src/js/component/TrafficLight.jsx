import React, { useState } from "react";
import "../../styles/index.css";
//create your first component
const TrafficLigth = () => {
	const [color, setcolor] = useState("red:'', yellow:'', green:''");

	return (
		<div className="trafficlight">
			<div
				className={`light red ${color.red}`}
				onClick={() => setcolor({ red: "on" })}></div>
			<div
				className={`light yellow ${color.yellow}`}
				onClick={() => setcolor({ yellow: "on" })}></div>
			<div
				className={`light green ${color.green}`}
				onClick={() => setcolor({ green: "on" })}></div>
		</div>
	);
};

export default TrafficLigth;
