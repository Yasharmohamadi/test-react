import React from "react";
import { Button } from "@mui/material";
import ParentHoc from "./ParentHoc";

function Reactjs({ title }) {
	return (
		<div>
			<Button variant="outlined" color="warning" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default ParentHoc(Reactjs, 'React js');
