import React from "react";
import { Button } from "@mui/material";
import  withToggle from "./withToggle";

function Q1({isShow, toggleHandler}) {
	

	return (
		<div>
			<Button variant="outlined" color="success" onClick={toggleHandler}>
				Q1
			</Button>

			{isShow && (
				<Button variant="contained" onClick={toggleHandler} disabled>
					123456789
				</Button>
			)}
		</div>
	);
}

export default withToggle(Q1);
