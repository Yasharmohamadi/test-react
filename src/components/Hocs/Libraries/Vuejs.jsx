import React from "react";
import { Button } from "@mui/material";
import LibraryHoc from "./LibraryHoc";

function Vuejs({ title }) {
	return (
		<div>
			<Button variant="outlined" color="success" className="hook_button">
				{title}
			</Button>
		</div>
	);
}

export default LibraryHoc(Vuejs, "Vue js");
