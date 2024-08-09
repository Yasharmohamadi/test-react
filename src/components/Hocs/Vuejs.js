import React from "react";
import { Button } from "@mui/material";
import ParentHoc from "./ParentHoc";

function Vuejs({ title }) {
	return (
		<div>
			<Button variant="outlined" color="success" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default ParentHoc(Vuejs, 'Vue js');
