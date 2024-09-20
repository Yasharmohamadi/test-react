import React, { useReducer } from "react";
import { Button } from "@mui/material";

export default function UseReducer() {
	const countReducer = (state, action) => {
		switch (action.type) {
			case "ADD": {
				return {
					number: state.number + 1,
				};
			}
			case "MINUS": {
				return {
					number: state.number - 1,
				};
			}
			default: {
				return state;
			}
		}
	};

	const [counter, dispath] = useReducer(countReducer, { number: 0 });
	// countReducer(state: counter, action: dispath({}))
	// when we will use 'dispath' actually we send a object to count reducer as 'action',
	// in action or in our object we send 'type' property for switch case on it and run our order.

	return (
		<div>
			<Button
				onClick={() => dispath({ type: "ADD" })}
				color="success"
				variant="contained"
			>
				Add
			</Button>
			<Button variant="contained" disabled>
				{counter.number}
			</Button>
			<Button
				onClick={() => dispath({ type: "MINUS" })}
				color="error"
				variant="contained"
			>
				Minus
			</Button>
		</div>
	);
}
