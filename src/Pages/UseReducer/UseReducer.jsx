import React, { useReducer } from "react";
import { Button } from "@mui/material";

const countReducer = (state, action) => {
	//countReducer(state: 0, action: dispath( {type: 'ADD / MINUS'} ) )

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

export default function UseReducer() {
	const [counter, dispatch] = useReducer(countReducer, { number: 0 });
	// counter = { number: 0 };

	// countReducer(state: counter, action: dispatch({}))
	// when we will use 'dispatch' actually we send a object to count reducer as 'action',
	// in action or in our object we send 'type' property for switch case on it and run our order.

	return (
		<div>
			<Button
				onClick={() => dispatch({ type: "ADD" })}
				color="success"
				variant="contained"
			>
				Add
			</Button>
			<Button variant="contained" disabled>
				{counter.number}
			</Button>
			<Button
				onClick={() => dispatch({ type: "MINUS" })}
				color="error"
				variant="contained"
			>
				Minus
			</Button>
		</div>
	);
}
