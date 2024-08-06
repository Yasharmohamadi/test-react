import React from "react";
import useCounter from "./useCounter";
import { Alert, Button } from "@mui/material";


export default function Hooks() {

  const [count, inc, dec, reset] = useCounter(0)

	return (
		<div>
			<div>
				<h1>useCounter hook :</h1>
				<h3></h3>
				<Button variant="outlined" onClick={inc}>+</Button>
				<Button variant="outlined" onClick={reset}>{count} </Button>
				<Button variant="outlined" onClick={dec}>-</Button>
			</div>
		</div>
	);
}
