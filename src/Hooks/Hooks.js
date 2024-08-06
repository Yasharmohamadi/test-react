import React from "react";
import useCounter from "./useCounter";
import { Alert, Button } from "@mui/material";

export default function Hooks() {
	const [count, inc, dec] = useCounter(0);

	return (
		<div>
			<div className="usecounter_hook">
				<Button variant="contained" disabled>
					useCounter hook :
				</Button>
				<Button variant="outlined" onClick={dec}>
					-
				</Button>
				<Button variant="outlined" disabled>
					{count}{" "}
				</Button>
				<Button variant="outlined" onClick={inc}>
					+
				</Button>
			</div>
		</div>
	);
}
