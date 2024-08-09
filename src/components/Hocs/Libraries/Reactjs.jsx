import React from "react";
import { Button } from "@mui/material";
import LibraryHoc from "./LibraryHoc";

function Reactjs({ title }) {
	return (
		<div>
			<Button variant="outlined" color="warning" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default LibraryHoc(Reactjs, "React js");
