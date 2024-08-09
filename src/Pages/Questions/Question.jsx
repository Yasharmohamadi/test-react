import React, { useState } from "react";
import { Button } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import withToggle from "./withToggle";

function Question({ id, title, info, showInfos, showHandler }) {
	console.log(id, title, info, showInfos, showHandler);
	return (
		<div>
			<Button
				variant="outlined"
				color="success"
				onClick={showHandler}
				endIcon={showInfos ? <ExpandLess /> : <ExpandMore />}
			>
				{id}. {title}
			</Button>

			{showInfos && (
				<Button variant="contained" disabled>
					{info}
				</Button>
			)}
		</div>
	);
}

export default withToggle(Question);
